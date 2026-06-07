import { AffiliateContract, AffiliateLink } from "./affiliate";

let contracts: AffiliateContract[] = [];
let links: AffiliateLink[] = [];

export function createContract(data: Omit<AffiliateContract, "id" | "status" | "createdAt">) {
  const contract: AffiliateContract = {
    ...data,
    id: `contract_${Date.now()}`,
    status: "Active",
    createdAt: Date.now(),
  };

  contracts.push(contract);
  return contract;
}

export function getContracts() {
  return contracts;
}

export function createAffiliateLink(contractId: string, sellerId: string, creatorId: string) {
  const link: AffiliateLink = {
    id: `link_${Date.now()}`,
    contractId,
    sellerId,
    creatorId,
    linkCode: `${sellerId}_${creatorId}_${Date.now()}`,
    clicks: 0,
    sales: 0,
    createdAt: Date.now(),
  };

  links.push(link);
  return link;
}

export function getLinks() {
  return links;
}

export function trackClick(linkCode: string) {
  const link = links.find(l => l.linkCode === linkCode);
  if (link) link.clicks += 1;
}

export function trackSale(linkCode: string) {
  const link = links.find(l => l.linkCode === linkCode);
  if (link) link.sales += 1;
}
