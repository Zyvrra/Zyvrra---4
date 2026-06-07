export type AffiliateContract = {
  id: string;

  sellerId: string;
  creatorId: string;

  // agreed % between seller & creator
  creatorShare: number; // e.g. 15%
  sellerShare: number;  // remainder after platform fee

  // Zyvrra rule:
  // +2% bonus always added to creator side
  zyvrraBoost: number; // always 2%

  status: "Pending" | "Active" | "Ended";

  createdAt: number;
};

export type AffiliateLink = {
  id: string;
  contractId: string;

  sellerId: string;
  creatorId: string;

  linkCode: string; // unique tracking id

  clicks: number;
  sales: number;

  createdAt: number;
};
