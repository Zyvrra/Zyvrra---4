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

  creatorShare: number; // e.g. 10%
  sellerShare: number;  // remaining
  zyvrraFee: number;    // always 2%

  status: ContractStatus;

  createdAt: number;
};

let contracts: Contract[] = [];

/**
 * Create contract (Seller action)
 */
export function createContract(input: {
  sellerId: string;
  creatorId: string;
  productName: string;
  creatorShare: number;
}): Contract {
  const contract: Contract = {
    id: `contract_${Date.now()}`,

    sellerId: input.sellerId,
    creatorId: input.creatorId,

    productName: input.productName,

    creatorShare: input.creatorShare,
    sellerShare: 100 - input.creatorShare - 2, // Zyvrra always 2%
    zyvrraFee: 2,

    status: "Pending",

    createdAt: Date.now(),
  };

  contracts.push(contract);
  return contract;
}

/**
 * Get contracts for creator inbox
 */
export function getCreatorContracts(creatorId: string) {
  return contracts.filter(
    (c) => c.creatorId === creatorId
  );
}

/**
 * Get contracts for seller dashboard
 */
export function getSellerContracts(sellerId: string) {
  return contracts.filter(
    (c) => c.sellerId === sellerId
  );
}

/**
 * Accept contract (Creator action)
 */
export function acceptContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Active" }
      : c
  );
}

/**
 * Reject contract (Creator action)
 */
export function rejectContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Rejected" }
      : c
  );
}
