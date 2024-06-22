import { test, expect, describe } from "vitest";
import { roOk, rov, txErr, txOk, varGet } from '@clarigen/test';
import util from 'util'
import { createFTSwap, deployer, errors, fixedFees, funToken, submitFTSwap, wrappedBitcoin, xbtcFtSwap } from "./helpers";
import { bufferCV, noneCV } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const alice = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_2")!;
const charlie = accounts.get("wallet_3")!;

const NOT_ENOUGH_FUNDS = 1n
const NOT_ENOUGH_FUNDS_AMPLIFIED = 100n
const NOT_ENOUGH_FUNDS_AMPLIFIED_AMPLIFIED = 1000n

describe("submit swaps", () => {
  
  test("Can't submit a swap for a closed swap", async () => {
    const createResp = createFTSwap(1000n, 200n, alice, bob, funToken.identifier, fixedFees.identifier);
    expect(createResp.value).toBe(0n);
    let submitResp = submitFTSwap(0n, 1000n, 200n, bob, funToken.identifier, fixedFees.identifier);
    expect(submitResp.value).toBe(true);
    
    const response = txErr(xbtcFtSwap.submitSwap(0n, funToken.identifier, fixedFees.identifier), charlie);
    expect(response.value).toBe(errors.xbtcFtSwap.ERR_ALREADY_DONE);
  });

})
