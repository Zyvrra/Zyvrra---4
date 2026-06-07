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
 * SELLER CREATES CONTRACT
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

  const contract: Contract = {
    id: `contract_${Date.now()}`,

    sellerId: user.id,
    creatorId: input.creatorId,

    productName: input.productName,

    creatorShare: input.creatorShare,
    sellerShare: 100 - input.creatorShare - zyvrraFee,
    zyvrraFee,

    status: "Pending",

    createdAt: Date.now(),
  };

  contracts.push(contract);
  return contract;
}

/**
 * CREATOR INBOX
 */
export function getCreatorContracts() {
  const user = getCurrentUser();
  if (!user) return [];

  return contracts.filter(
    (c) => c.creatorId === user.id
  );
}

/**
 * SELLER DASHBOARD
 */
export function getSellerContracts() {
  const user = getCurrentUser();
  if (!user) return [];

  return contracts.filter(
    (c) => c.sellerId === user.id
  );
}

/**
 * ACCEPT CONTRACT
 */
export function acceptContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Active" }
      : c
  );
}

/**
 * REJECT CONTRACT
 */
export function rejectContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Rejected" }
      : c
  );
}
