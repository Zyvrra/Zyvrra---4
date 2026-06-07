import { getCurrentUser } from "./userStore";

export type ContractStatus =
  | "Pending"
  | "Active"
  | "Rejected"
  | "Ended";

export type Contract = {
  id: string;

  sellerId: string;
  creatorId: string;

  productName: string;

  creatorShare: number;
  sellerShare: number;
  zyvrraFee: number;

  status: ContractStatus;

  createdAt: number;
};

let contracts: Contract[] = [];

/**
 * CREATE CONTRACT (SELLER ONLY)
 */
export function createContract(input: {
  creatorId: string;
  productName: string;
  creatorShare: number;
}): Contract {
  const user = getCurrentUser();

  if (!user || user.role !== "seller") {
    throw new Error("Only sellers can create contracts");
  }

  const zyvrraFee = 2;

  const creatorShare = Math.max(1, Math.min(98, input.creatorShare));

  const contract: Contract = {
    id: `contract_${Date.now()}`,

    sellerId: user.id,
    creatorId: input.creatorId,

    productName: input.productName,

    creatorShare,
    sellerShare: 100 - creatorShare - zyvrraFee,
    zyvrraFee,

    status: "Pending",

    createdAt: Date.now(),
  };

  contracts.push(contract);
  return contract;
}

/**
 * CREATOR CONTRACTS
 */
export function getCreatorContracts() {
  const user = getCurrentUser();
  if (!user) return [];

  return contracts.filter(
    (c) => c.creatorId === user.id
  );
}

/**
 * SELLER CONTRACTS
 */
export function getSellerContracts() {
  const user = getCurrentUser();
  if (!user) return [];

  return contracts.filter(
    (c) => c.sellerId === user.id
  );
}

/**
 * ACCEPT
 */
export function acceptContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Active" }
      : c
  );
}

/**
 * REJECT
 */
export function rejectContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Rejected" }
      : c
  );
}
