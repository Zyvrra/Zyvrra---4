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

  // 💰 SPLIT RULES
  creatorShare: number; // e.g. 10%
  sellerShare: number;  // auto-calculated
  zyvrraFee: number;    // always 2%

  status: ContractStatus;

  createdAt: number;
};

/**
 * In-memory contract storage (MVP)
 * Later replaced with database (Supabase/Firebase/Postgres)
 */
let contracts: Contract[] = [];

/**
 * CREATE CONTRACT (Seller action)
 * This is what powers your marketplace agreements
 */
export function createContract(input: {
  sellerId: string;
  creatorId: string;
  productName: string;
  creatorShare: number;
}): Contract {
  const zyvrraFee = 2;

  const contract: Contract = {
    id: `contract_${Date.now()}`,

    sellerId: input.sellerId,
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
 * GET CONTRACTS FOR CREATOR (Inbox)
 */
export function getCreatorContracts(creatorId: string) {
  return contracts.filter(
    (c) => c.creatorId === creatorId
  );
}

/**
 * GET CONTRACTS FOR SELLER (Dashboard)
 */
export function getSellerContracts(sellerId: string) {
  return contracts.filter(
    (c) => c.sellerId === sellerId
  );
}

/**
 * ACCEPT CONTRACT (Creator action)
 */
export function acceptContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Active" }
      : c
  );
}

/**
 * REJECT CONTRACT (Creator action)
 */
export function rejectContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Rejected" }
      : c
  );
}

/**
 * END CONTRACT (optional future use)
 */
export function endContract(contractId: string) {
  contracts = contracts.map((c) =>
    c.id === contractId
      ? { ...c, status: "Ended" }
      : c
  );
}

/**
 * GET SINGLE CONTRACT (useful for contract page later)
 */
export function getContractById(contractId: string) {
  return contracts.find((c) => c.id === contractId);
}
