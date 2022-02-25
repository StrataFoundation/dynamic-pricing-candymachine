import {
  Alert,
  Image,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Skeleton,
  Center,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { PublicKey } from "@solana/web3.js";
import { useTokenMetadata } from "@strata-foundation/react";
import React from "react";

export interface IMintedNftNotificationProps {
  onDismiss?: () => void;
  mint: PublicKey;
}

export const MintedNftNotification = ({
  onDismiss,
  mint,
}: IMintedNftNotificationProps) => {
  const { metadata, image, loading } = useTokenMetadata(mint);
  return (
    <Alert
      w="full"
      bgColor="black.300"
      borderTop="1px"
      borderTopColor="gray.600"
      fontFamily="body"
      color="white"
      status={"success"}
    >
      <VStack align="stretch">
        <HStack flex="1" align="center">
          <AlertIcon />
          <AlertTitle>Congratulations! Mint Successful!</AlertTitle>
        </HStack>
        <VStack align="stretch">
          {(loading || !image) && <Skeleton w="100%" h="388px" />}
          {!loading && image && (
            <Image
              alt={metadata?.data.name}
              w="100%"
              minH="388px"
              src={image}
            />
          )}
          {metadata && <Heading size="sm">{metadata.data.name}</Heading>}
        </VStack>
      </VStack>
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        color="gray.400"
        _hover={{ color: "gray.600", cursor: "pointer" }}
        onClick={onDismiss}
      />
    </Alert>
  );
};
