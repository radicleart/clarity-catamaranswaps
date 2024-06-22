
import type { TypedAbiArg, TypedAbiFunction, TypedAbiMap, TypedAbiVariable, Response } from '@clarigen/core';

export const contracts = {
  btcStxSwap: {
  "functions": {
    findOut: {"name":"find-out","access":"private","args":[{"name":"entry","type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]}},{"name":"result","type":{"tuple":[{"name":"out","type":{"optional":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]}}},{"name":"pubscriptkey","type":{"buffer":{"length":40}}}]}}],"outputs":{"type":{"tuple":[{"name":"out","type":{"optional":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]}}},{"name":"pubscriptkey","type":{"buffer":{"length":40}}}]}}} as TypedAbiFunction<[entry: TypedAbiArg<{
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}, "entry">, result: TypedAbiArg<{
  "out": {
  "scriptPubKey": Uint8Array;
  "value": number | bigint;
} | null;
  "pubscriptkey": Uint8Array;
}, "result">], {
  "out": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
} | null;
  "pubscriptkey": Uint8Array;
}>,
    cancel: {"name":"cancel","access":"public","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<boolean, bigint>>,
    createSwap: {"name":"create-swap","access":"public","args":[{"name":"sats","type":"uint128"},{"name":"btc-receiver","type":{"buffer":{"length":40}}},{"name":"ustx","type":"uint128"},{"name":"stx-receiver","type":{"optional":"principal"}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[sats: TypedAbiArg<number | bigint, "sats">, btcReceiver: TypedAbiArg<Uint8Array, "btcReceiver">, ustx: TypedAbiArg<number | bigint, "ustx">, stxReceiver: TypedAbiArg<string | null, "stxReceiver">], Response<bigint, bigint>>,
    getOutValue: {"name":"get-out-value","access":"public","args":[{"name":"tx","type":{"tuple":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]},"length":8}}},{"name":"locktime","type":{"buffer":{"length":4}}},{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]},"length":8}}},{"name":"version","type":{"buffer":{"length":4}}}]}},{"name":"pubscriptkey","type":{"buffer":{"length":40}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"out","type":{"optional":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]}}},{"name":"pubscriptkey","type":{"buffer":{"length":40}}}]},"error":"none"}}}} as TypedAbiFunction<[tx: TypedAbiArg<{
  "ins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}[];
  "locktime": Uint8Array;
  "outs": {
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}[];
  "version": Uint8Array;
}, "tx">, pubscriptkey: TypedAbiArg<Uint8Array, "pubscriptkey">], Response<{
  "out": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
} | null;
  "pubscriptkey": Uint8Array;
}, null>>,
    setStxReceiver: {"name":"set-stx-receiver","access":"public","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<boolean, bigint>>,
    submitSwap: {"name":"submit-swap","access":"public","args":[{"name":"id","type":"uint128"},{"name":"block","type":{"tuple":[{"name":"height","type":"uint128"},{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"nbits","type":{"buffer":{"length":4}}},{"name":"nonce","type":{"buffer":{"length":4}}},{"name":"parent","type":{"buffer":{"length":32}}},{"name":"timestamp","type":{"buffer":{"length":4}}},{"name":"version","type":{"buffer":{"length":4}}}]}},{"name":"tx","type":{"tuple":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]},"length":8}}},{"name":"locktime","type":{"buffer":{"length":4}}},{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]},"length":8}}},{"name":"version","type":{"buffer":{"length":4}}}]}},{"name":"proof","type":{"tuple":[{"name":"hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"tree-depth","type":"uint128"},{"name":"tx-index","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, block: TypedAbiArg<{
  "height": number | bigint;
  "merkleRoot": Uint8Array;
  "nbits": Uint8Array;
  "nonce": Uint8Array;
  "parent": Uint8Array;
  "timestamp": Uint8Array;
  "version": Uint8Array;
}, "block">, tx: TypedAbiArg<{
  "ins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}[];
  "locktime": Uint8Array;
  "outs": {
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}[];
  "version": Uint8Array;
}, "tx">, proof: TypedAbiArg<{
  "hashes": Uint8Array[];
  "treeDepth": number | bigint;
  "txIndex": number | bigint;
}, "proof">], Response<boolean, bigint>>
  },
  "maps": {
    swaps: {"name":"swaps","key":"uint128","value":{"tuple":[{"name":"btc-receiver","type":{"buffer":{"length":40}}},{"name":"done","type":"uint128"},{"name":"sats","type":"uint128"},{"name":"stx-receiver","type":{"optional":"principal"}},{"name":"stx-sender","type":"principal"},{"name":"ustx","type":"uint128"},{"name":"when","type":"uint128"}]}} as TypedAbiMap<number | bigint, {
  "btcReceiver": Uint8Array;
  "done": bigint;
  "sats": bigint;
  "stxReceiver": string | null;
  "stxSender": string;
  "ustx": bigint;
  "when": bigint;
}>
  },
  "variables": {
    ERR_ALREADY_DONE: {
  name: 'ERR_ALREADY_DONE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_FAILED_TO_PARSE_TX: {
  name: 'ERR_FAILED_TO_PARSE_TX',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_ID: {
  name: 'ERR_INVALID_ID',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NATIVE_FAILURE: {
  name: 'ERR_NATIVE_FAILURE',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NO_STX_RECEIVER: {
  name: 'ERR_NO_STX_RECEIVER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TOO_EARLY: {
  name: 'ERR_TOO_EARLY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TX_NOT_FOR_RECEIVER: {
  name: 'ERR_TX_NOT_FOR_RECEIVER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TX_VALUE_TOO_SMALL: {
  name: 'ERR_TX_VALUE_TOO_SMALL',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_VERIFICATION_FAILED: {
  name: 'ERR_VERIFICATION_FAILED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    expiry: {
  name: 'expiry',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    nextId: {
  name: 'next-id',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  ERR_ALREADY_DONE: {
    isOk: false,
    value: 7n
  },
  ERR_FAILED_TO_PARSE_TX: {
    isOk: false,
    value: 2n
  },
  ERR_INVALID_ID: {
    isOk: false,
    value: 3n
  },
  ERR_NATIVE_FAILURE: {
    isOk: false,
    value: 99n
  },
  ERR_NO_STX_RECEIVER: {
    isOk: false,
    value: 8n
  },
  ERR_TOO_EARLY: {
    isOk: false,
    value: 4n
  },
  ERR_TX_NOT_FOR_RECEIVER: {
    isOk: false,
    value: 6n
  },
  ERR_TX_VALUE_TOO_SMALL: {
    isOk: false,
    value: 5n
  },
  ERR_VERIFICATION_FAILED: {
    isOk: false,
    value: 1n
  },
  expiry: 100n,
  nextId: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'btc-stx-swap',
  },
citycoinCoreTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'citycoin-core-trait',
  },
citycoinTokenTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'citycoin-token-trait',
  },
clarityBitcoin: {
  "functions": {
    buffToU8: {"name":"buff-to-u8","access":"read_only","args":[{"name":"byte","type":{"buffer":{"length":1}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[byte: TypedAbiArg<Uint8Array, "byte">], bigint>,
    concatHeader: {"name":"concat-header","access":"read_only","args":[{"name":"block","type":{"tuple":[{"name":"height","type":"uint128"},{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"nbits","type":{"buffer":{"length":4}}},{"name":"nonce","type":{"buffer":{"length":4}}},{"name":"parent","type":{"buffer":{"length":32}}},{"name":"timestamp","type":{"buffer":{"length":4}}},{"name":"version","type":{"buffer":{"length":4}}}]}}],"outputs":{"type":{"buffer":{"length":80}}}} as TypedAbiFunction<[block: TypedAbiArg<{
  "height": number | bigint;
  "merkleRoot": Uint8Array;
  "nbits": Uint8Array;
  "nonce": Uint8Array;
  "parent": Uint8Array;
  "timestamp": Uint8Array;
  "version": Uint8Array;
}, "block">], Uint8Array>,
    concatIn: {"name":"concat-in","access":"read_only","args":[{"name":"in","type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]}},{"name":"result","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[_in: TypedAbiArg<{
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}, "_in">, result: TypedAbiArg<Uint8Array, "result">], Uint8Array>,
    concatIns: {"name":"concat-ins","access":"read_only","args":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]},"length":8}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[ins: TypedAbiArg<{
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}[], "ins">], Uint8Array>,
    concatOut: {"name":"concat-out","access":"read_only","args":[{"name":"out","type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]}},{"name":"result","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[out: TypedAbiArg<{
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}, "out">, result: TypedAbiArg<Uint8Array, "result">], Uint8Array>,
    concatOuts: {"name":"concat-outs","access":"read_only","args":[{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]},"length":8}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[outs: TypedAbiArg<{
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}[], "outs">], Uint8Array>,
    concatTx: {"name":"concat-tx","access":"read_only","args":[{"name":"tx","type":{"tuple":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]},"length":8}}},{"name":"locktime","type":{"buffer":{"length":4}}},{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]},"length":8}}},{"name":"version","type":{"buffer":{"length":4}}}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[tx: TypedAbiArg<{
  "ins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}[];
  "locktime": Uint8Array;
  "outs": {
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}[];
  "version": Uint8Array;
}, "tx">], Uint8Array>,
    concatVar: {"name":"concat-var","access":"read_only","args":[{"name":"buffer","type":{"buffer":{"length":256}}}],"outputs":{"type":{"buffer":{"length":257}}}} as TypedAbiFunction<[buffer: TypedAbiArg<Uint8Array, "buffer">], Uint8Array>,
    getBcHHash: {"name":"get-bc-h-hash","access":"read_only","args":[{"name":"bh","type":"uint128"}],"outputs":{"type":{"optional":{"buffer":{"length":32}}}}} as TypedAbiFunction<[bh: TypedAbiArg<number | bigint, "bh">], Uint8Array | null>,
    getReversedTxid: {"name":"get-reversed-txid","access":"read_only","args":[{"name":"tx","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[tx: TypedAbiArg<Uint8Array, "tx">], Uint8Array>,
    getTxid: {"name":"get-txid","access":"read_only","args":[{"name":"tx","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[tx: TypedAbiArg<Uint8Array, "tx">], Uint8Array>,
    innerBuff32Permutation: {"name":"inner-buff32-permutation","access":"read_only","args":[{"name":"target-index","type":"uint128"},{"name":"state","type":{"tuple":[{"name":"hash-input","type":{"buffer":{"length":32}}},{"name":"hash-output","type":{"buffer":{"length":32}}}]}}],"outputs":{"type":{"tuple":[{"name":"hash-input","type":{"buffer":{"length":32}}},{"name":"hash-output","type":{"buffer":{"length":32}}}]}}} as TypedAbiFunction<[targetIndex: TypedAbiArg<number | bigint, "targetIndex">, state: TypedAbiArg<{
  "hashInput": Uint8Array;
  "hashOutput": Uint8Array;
}, "state">], {
  "hashInput": Uint8Array;
  "hashOutput": Uint8Array;
}>,
    innerMerkleProofVerify: {"name":"inner-merkle-proof-verify","access":"read_only","args":[{"name":"ctr","type":"uint128"},{"name":"state","type":{"tuple":[{"name":"cur-hash","type":{"buffer":{"length":32}}},{"name":"path","type":"uint128"},{"name":"proof-hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"root-hash","type":{"buffer":{"length":32}}},{"name":"tree-depth","type":"uint128"},{"name":"verified","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"cur-hash","type":{"buffer":{"length":32}}},{"name":"path","type":"uint128"},{"name":"proof-hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"root-hash","type":{"buffer":{"length":32}}},{"name":"tree-depth","type":"uint128"},{"name":"verified","type":"bool"}]}}} as TypedAbiFunction<[ctr: TypedAbiArg<number | bigint, "ctr">, state: TypedAbiArg<{
  "curHash": Uint8Array;
  "path": number | bigint;
  "proofHashes": Uint8Array[];
  "rootHash": Uint8Array;
  "treeDepth": number | bigint;
  "verified": boolean;
}, "state">], {
  "curHash": Uint8Array;
  "path": bigint;
  "proofHashes": Uint8Array[];
  "rootHash": Uint8Array;
  "treeDepth": bigint;
  "verified": boolean;
}>,
    innerReadSlice: {"name":"inner-read-slice","access":"read_only","args":[{"name":"chunk_size","type":"uint128"},{"name":"input","type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"buffer","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"},{"name":"remaining","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"buffer","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"},{"name":"remaining","type":"uint128"}]}}} as TypedAbiFunction<[chunk_size: TypedAbiArg<number | bigint, "chunk_size">, input: TypedAbiArg<{
  "acc": Uint8Array;
  "buffer": Uint8Array;
  "index": number | bigint;
  "remaining": number | bigint;
}, "input">], {
  "acc": Uint8Array;
  "buffer": Uint8Array;
  "index": bigint;
  "remaining": bigint;
}>,
    innerReadSlice1024: {"name":"inner-read-slice-1024","access":"read_only","args":[{"name":"ignored","type":"bool"},{"name":"input","type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}} as TypedAbiFunction<[ignored: TypedAbiArg<boolean, "ignored">, input: TypedAbiArg<{
  "acc": Uint8Array;
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], {
  "acc": Uint8Array;
  "data": Uint8Array;
  "index": bigint;
}>,
    isBitSet: {"name":"is-bit-set","access":"read_only","args":[{"name":"val","type":"uint128"},{"name":"bit","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">, bit: TypedAbiArg<number | bigint, "bit">], boolean>,
    parseBlockHeader: {"name":"parse-block-header","access":"read_only","args":[{"name":"headerbuff","type":{"buffer":{"length":80}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"nbits","type":"uint128"},{"name":"nonce","type":"uint128"},{"name":"parent","type":{"buffer":{"length":32}}},{"name":"timestamp","type":"uint128"},{"name":"version","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[headerbuff: TypedAbiArg<Uint8Array, "headerbuff">], Response<{
  "merkleRoot": Uint8Array;
  "nbits": bigint;
  "nonce": bigint;
  "parent": Uint8Array;
  "timestamp": bigint;
  "version": bigint;
}, bigint>>,
    parseTx: {"name":"parse-tx","access":"read_only","args":[{"name":"tx","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}},{"name":"locktime","type":"uint128"},{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}},{"name":"version","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[tx: TypedAbiArg<Uint8Array, "tx">], Response<{
  "ins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": bigint;
};
  "scriptSig": Uint8Array;
  "sequence": bigint;
}[];
  "locktime": bigint;
  "outs": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
}[];
  "version": bigint;
}, bigint>>,
    readHashslice: {"name":"read-hashslice","access":"read_only","args":[{"name":"old-ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"hashslice","type":{"buffer":{"length":32}}}]},"error":"uint128"}}}} as TypedAbiFunction<[oldCtx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "oldCtx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "hashslice": Uint8Array;
}, bigint>>,
    readNextTxin: {"name":"read-next-txin","access":"read_only","args":[{"name":"ignored","type":"bool"},{"name":"state-res","type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ignored: TypedAbiArg<boolean, "ignored">, stateRes: TypedAbiArg<Response<{
  "ctx": {
  "index": number | bigint;
  "txbuff": Uint8Array;
};
  "remaining": number | bigint;
  "txins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": number | bigint;
};
  "scriptSig": Uint8Array;
  "sequence": number | bigint;
}[];
}, number | bigint>, "stateRes">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": bigint;
};
  "scriptSig": Uint8Array;
  "sequence": bigint;
}[];
}, bigint>>,
    readNextTxout: {"name":"read-next-txout","access":"read_only","args":[{"name":"ignored","type":"bool"},{"name":"state-res","type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txouts","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txouts","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ignored: TypedAbiArg<boolean, "ignored">, stateRes: TypedAbiArg<Response<{
  "ctx": {
  "index": number | bigint;
  "txbuff": Uint8Array;
};
  "remaining": number | bigint;
  "txouts": {
  "scriptPubKey": Uint8Array;
  "value": number | bigint;
}[];
}, number | bigint>, "stateRes">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txouts": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
}[];
}, bigint>>,
    readSlice: {"name":"read-slice","access":"read_only","args":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"offset","type":"uint128"},{"name":"size","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":1024}},"error":"uint128"}}}} as TypedAbiFunction<[data: TypedAbiArg<Uint8Array, "data">, offset: TypedAbiArg<number | bigint, "offset">, size: TypedAbiArg<number | bigint, "size">], Response<Uint8Array, bigint>>,
    readSlice1: {"name":"read-slice-1","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice128: {"name":"read-slice-128","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice16: {"name":"read-slice-16","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice2: {"name":"read-slice-2","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice256: {"name":"read-slice-256","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice32: {"name":"read-slice-32","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice4: {"name":"read-slice-4","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice512: {"name":"read-slice-512","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice64: {"name":"read-slice-64","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice8: {"name":"read-slice-8","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readTxins: {"name":"read-txins","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": bigint;
};
  "scriptSig": Uint8Array;
  "sequence": bigint;
}[];
}, bigint>>,
    readTxouts: {"name":"read-txouts","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txouts","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txouts": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
}[];
}, bigint>>,
    readUint16: {"name":"read-uint16","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"uint16","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "uint16": bigint;
}, bigint>>,
    readUint32: {"name":"read-uint32","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"uint32","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "uint32": bigint;
}, bigint>>,
    readUint64: {"name":"read-uint64","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"uint64","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "uint64": bigint;
}, bigint>>,
    readVarint: {"name":"read-varint","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"varint","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "varint": bigint;
}, bigint>>,
    readVarslice: {"name":"read-varslice","access":"read_only","args":[{"name":"old-ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"varslice","type":{"buffer":{"length":1024}}}]},"error":"uint128"}}}} as TypedAbiFunction<[oldCtx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "oldCtx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "varslice": Uint8Array;
}, bigint>>,
    reverseBuff32: {"name":"reverse-buff32","access":"read_only","args":[{"name":"input","type":{"buffer":{"length":32}}}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[input: TypedAbiArg<Uint8Array, "input">], Uint8Array>,
    verifyBlockHeader: {"name":"verify-block-header","access":"read_only","args":[{"name":"headerbuff","type":{"buffer":{"length":80}}},{"name":"expected-block-height","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[headerbuff: TypedAbiArg<Uint8Array, "headerbuff">, expectedBlockHeight: TypedAbiArg<number | bigint, "expectedBlockHeight">], boolean>,
    verifyMerkleProof: {"name":"verify-merkle-proof","access":"read_only","args":[{"name":"reversed-txid","type":{"buffer":{"length":32}}},{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"proof","type":{"tuple":[{"name":"hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"tree-depth","type":"uint128"},{"name":"tx-index","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[reversedTxid: TypedAbiArg<Uint8Array, "reversedTxid">, merkleRoot: TypedAbiArg<Uint8Array, "merkleRoot">, proof: TypedAbiArg<{
  "hashes": Uint8Array[];
  "treeDepth": number | bigint;
  "txIndex": number | bigint;
}, "proof">], Response<boolean, bigint>>,
    wasTxMined: {"name":"was-tx-mined","access":"read_only","args":[{"name":"block","type":{"tuple":[{"name":"height","type":"uint128"},{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"nbits","type":{"buffer":{"length":4}}},{"name":"nonce","type":{"buffer":{"length":4}}},{"name":"parent","type":{"buffer":{"length":32}}},{"name":"timestamp","type":{"buffer":{"length":4}}},{"name":"version","type":{"buffer":{"length":4}}}]}},{"name":"tx","type":{"buffer":{"length":1024}}},{"name":"proof","type":{"tuple":[{"name":"hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"tree-depth","type":"uint128"},{"name":"tx-index","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[block: TypedAbiArg<{
  "height": number | bigint;
  "merkleRoot": Uint8Array;
  "nbits": Uint8Array;
  "nonce": Uint8Array;
  "parent": Uint8Array;
  "timestamp": Uint8Array;
  "version": Uint8Array;
}, "block">, tx: TypedAbiArg<Uint8Array, "tx">, proof: TypedAbiArg<{
  "hashes": Uint8Array[];
  "treeDepth": number | bigint;
  "txIndex": number | bigint;
}, "proof">], Response<boolean, bigint>>,
    wasTxMinedCompact: {"name":"was-tx-mined-compact","access":"read_only","args":[{"name":"block","type":{"tuple":[{"name":"header","type":{"buffer":{"length":80}}},{"name":"height","type":"uint128"}]}},{"name":"tx","type":{"buffer":{"length":1024}}},{"name":"proof","type":{"tuple":[{"name":"hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"tree-depth","type":"uint128"},{"name":"tx-index","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[block: TypedAbiArg<{
  "header": Uint8Array;
  "height": number | bigint;
}, "block">, tx: TypedAbiArg<Uint8Array, "tx">, proof: TypedAbiArg<{
  "hashes": Uint8Array[];
  "treeDepth": number | bigint;
  "txIndex": number | bigint;
}, "proof">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    BUFF_TO_BYTE: {
  name: 'BUFF_TO_BYTE',
  type: {
    list: {
      type: {
        buffer: {
          length: 1
        }
      },
      length: 256
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array[]>,
    ERR_BAD_HEADER: {
  name: 'ERR-BAD-HEADER',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_OUT_OF_BOUNDS: {
  name: 'ERR-OUT-OF-BOUNDS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_PROOF_TOO_SHORT: {
  name: 'ERR-PROOF-TOO-SHORT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_TOO_MANY_TXINS: {
  name: 'ERR-TOO-MANY-TXINS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_TOO_MANY_TXOUTS: {
  name: 'ERR-TOO-MANY-TXOUTS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_VARSLICE_TOO_LONG: {
  name: 'ERR-VARSLICE-TOO-LONG',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    lIST_128: {
  name: 'LIST_128',
  type: {
    list: {
      type: 'bool',
      length: 128
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_16: {
  name: 'LIST_16',
  type: {
    list: {
      type: 'bool',
      length: 16
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_256: {
  name: 'LIST_256',
  type: {
    list: {
      type: 'bool',
      length: 256
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_32: {
  name: 'LIST_32',
  type: {
    list: {
      type: 'bool',
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_512: {
  name: 'LIST_512',
  type: {
    list: {
      type: 'bool',
      length: 512
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_64: {
  name: 'LIST_64',
  type: {
    list: {
      type: 'bool',
      length: 64
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>
  },
  constants: {
  BUFF_TO_BYTE: [
    Uint8Array.from([0]),
    Uint8Array.from([1]),
    Uint8Array.from([2]),
    Uint8Array.from([3]),
    Uint8Array.from([4]),
    Uint8Array.from([5]),
    Uint8Array.from([6]),
    Uint8Array.from([7]),
    Uint8Array.from([8]),
    Uint8Array.from([9]),
    Uint8Array.from([10]),
    Uint8Array.from([11]),
    Uint8Array.from([12]),
    Uint8Array.from([13]),
    Uint8Array.from([14]),
    Uint8Array.from([15]),
    Uint8Array.from([16]),
    Uint8Array.from([17]),
    Uint8Array.from([18]),
    Uint8Array.from([19]),
    Uint8Array.from([20]),
    Uint8Array.from([21]),
    Uint8Array.from([22]),
    Uint8Array.from([23]),
    Uint8Array.from([24]),
    Uint8Array.from([25]),
    Uint8Array.from([26]),
    Uint8Array.from([27]),
    Uint8Array.from([28]),
    Uint8Array.from([29]),
    Uint8Array.from([30]),
    Uint8Array.from([31]),
    Uint8Array.from([32]),
    Uint8Array.from([33]),
    Uint8Array.from([34]),
    Uint8Array.from([35]),
    Uint8Array.from([36]),
    Uint8Array.from([37]),
    Uint8Array.from([38]),
    Uint8Array.from([39]),
    Uint8Array.from([40]),
    Uint8Array.from([41]),
    Uint8Array.from([42]),
    Uint8Array.from([43]),
    Uint8Array.from([44]),
    Uint8Array.from([45]),
    Uint8Array.from([46]),
    Uint8Array.from([47]),
    Uint8Array.from([48]),
    Uint8Array.from([49]),
    Uint8Array.from([50]),
    Uint8Array.from([51]),
    Uint8Array.from([52]),
    Uint8Array.from([53]),
    Uint8Array.from([54]),
    Uint8Array.from([55]),
    Uint8Array.from([56]),
    Uint8Array.from([57]),
    Uint8Array.from([58]),
    Uint8Array.from([59]),
    Uint8Array.from([60]),
    Uint8Array.from([61]),
    Uint8Array.from([62]),
    Uint8Array.from([63]),
    Uint8Array.from([64]),
    Uint8Array.from([65]),
    Uint8Array.from([66]),
    Uint8Array.from([67]),
    Uint8Array.from([68]),
    Uint8Array.from([69]),
    Uint8Array.from([70]),
    Uint8Array.from([71]),
    Uint8Array.from([72]),
    Uint8Array.from([73]),
    Uint8Array.from([74]),
    Uint8Array.from([75]),
    Uint8Array.from([76]),
    Uint8Array.from([77]),
    Uint8Array.from([78]),
    Uint8Array.from([79]),
    Uint8Array.from([80]),
    Uint8Array.from([81]),
    Uint8Array.from([82]),
    Uint8Array.from([83]),
    Uint8Array.from([84]),
    Uint8Array.from([85]),
    Uint8Array.from([86]),
    Uint8Array.from([87]),
    Uint8Array.from([88]),
    Uint8Array.from([89]),
    Uint8Array.from([90]),
    Uint8Array.from([91]),
    Uint8Array.from([92]),
    Uint8Array.from([93]),
    Uint8Array.from([94]),
    Uint8Array.from([95]),
    Uint8Array.from([96]),
    Uint8Array.from([97]),
    Uint8Array.from([98]),
    Uint8Array.from([99]),
    Uint8Array.from([100]),
    Uint8Array.from([101]),
    Uint8Array.from([102]),
    Uint8Array.from([103]),
    Uint8Array.from([104]),
    Uint8Array.from([105]),
    Uint8Array.from([106]),
    Uint8Array.from([107]),
    Uint8Array.from([108]),
    Uint8Array.from([109]),
    Uint8Array.from([110]),
    Uint8Array.from([111]),
    Uint8Array.from([112]),
    Uint8Array.from([113]),
    Uint8Array.from([114]),
    Uint8Array.from([115]),
    Uint8Array.from([116]),
    Uint8Array.from([117]),
    Uint8Array.from([118]),
    Uint8Array.from([119]),
    Uint8Array.from([120]),
    Uint8Array.from([121]),
    Uint8Array.from([122]),
    Uint8Array.from([123]),
    Uint8Array.from([124]),
    Uint8Array.from([125]),
    Uint8Array.from([126]),
    Uint8Array.from([127]),
    Uint8Array.from([128]),
    Uint8Array.from([129]),
    Uint8Array.from([130]),
    Uint8Array.from([131]),
    Uint8Array.from([132]),
    Uint8Array.from([133]),
    Uint8Array.from([134]),
    Uint8Array.from([135]),
    Uint8Array.from([136]),
    Uint8Array.from([137]),
    Uint8Array.from([138]),
    Uint8Array.from([139]),
    Uint8Array.from([140]),
    Uint8Array.from([141]),
    Uint8Array.from([142]),
    Uint8Array.from([143]),
    Uint8Array.from([144]),
    Uint8Array.from([145]),
    Uint8Array.from([146]),
    Uint8Array.from([147]),
    Uint8Array.from([148]),
    Uint8Array.from([149]),
    Uint8Array.from([150]),
    Uint8Array.from([151]),
    Uint8Array.from([152]),
    Uint8Array.from([153]),
    Uint8Array.from([154]),
    Uint8Array.from([155]),
    Uint8Array.from([156]),
    Uint8Array.from([157]),
    Uint8Array.from([158]),
    Uint8Array.from([159]),
    Uint8Array.from([160]),
    Uint8Array.from([161]),
    Uint8Array.from([162]),
    Uint8Array.from([163]),
    Uint8Array.from([164]),
    Uint8Array.from([165]),
    Uint8Array.from([166]),
    Uint8Array.from([167]),
    Uint8Array.from([168]),
    Uint8Array.from([169]),
    Uint8Array.from([170]),
    Uint8Array.from([171]),
    Uint8Array.from([172]),
    Uint8Array.from([173]),
    Uint8Array.from([174]),
    Uint8Array.from([175]),
    Uint8Array.from([176]),
    Uint8Array.from([177]),
    Uint8Array.from([178]),
    Uint8Array.from([179]),
    Uint8Array.from([180]),
    Uint8Array.from([181]),
    Uint8Array.from([182]),
    Uint8Array.from([183]),
    Uint8Array.from([184]),
    Uint8Array.from([185]),
    Uint8Array.from([186]),
    Uint8Array.from([187]),
    Uint8Array.from([188]),
    Uint8Array.from([189]),
    Uint8Array.from([190]),
    Uint8Array.from([191]),
    Uint8Array.from([192]),
    Uint8Array.from([193]),
    Uint8Array.from([194]),
    Uint8Array.from([195]),
    Uint8Array.from([196]),
    Uint8Array.from([197]),
    Uint8Array.from([198]),
    Uint8Array.from([199]),
    Uint8Array.from([200]),
    Uint8Array.from([201]),
    Uint8Array.from([202]),
    Uint8Array.from([203]),
    Uint8Array.from([204]),
    Uint8Array.from([205]),
    Uint8Array.from([206]),
    Uint8Array.from([207]),
    Uint8Array.from([208]),
    Uint8Array.from([209]),
    Uint8Array.from([210]),
    Uint8Array.from([211]),
    Uint8Array.from([212]),
    Uint8Array.from([213]),
    Uint8Array.from([214]),
    Uint8Array.from([215]),
    Uint8Array.from([216]),
    Uint8Array.from([217]),
    Uint8Array.from([218]),
    Uint8Array.from([219]),
    Uint8Array.from([220]),
    Uint8Array.from([221]),
    Uint8Array.from([222]),
    Uint8Array.from([223]),
    Uint8Array.from([224]),
    Uint8Array.from([225]),
    Uint8Array.from([226]),
    Uint8Array.from([227]),
    Uint8Array.from([228]),
    Uint8Array.from([229]),
    Uint8Array.from([230]),
    Uint8Array.from([231]),
    Uint8Array.from([232]),
    Uint8Array.from([233]),
    Uint8Array.from([234]),
    Uint8Array.from([235]),
    Uint8Array.from([236]),
    Uint8Array.from([237]),
    Uint8Array.from([238]),
    Uint8Array.from([239]),
    Uint8Array.from([240]),
    Uint8Array.from([241]),
    Uint8Array.from([242]),
    Uint8Array.from([243]),
    Uint8Array.from([244]),
    Uint8Array.from([245]),
    Uint8Array.from([246]),
    Uint8Array.from([247]),
    Uint8Array.from([248]),
    Uint8Array.from([249]),
    Uint8Array.from([250]),
    Uint8Array.from([251]),
    Uint8Array.from([252]),
    Uint8Array.from([253]),
    Uint8Array.from([254]),
    Uint8Array.from([255])
  ],
  eRRBADHEADER: 5n,
  eRROUTOFBOUNDS: 1n,
  eRRPROOFTOOSHORT: 6n,
  eRRTOOMANYTXINS: 2n,
  eRRTOOMANYTXOUTS: 3n,
  eRRVARSLICETOOLONG: 4n,
  lIST_128: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ],
  lIST_16: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ],
  lIST_256: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ],
  lIST_32: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ],
  lIST_512: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ],
  lIST_64: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ]
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'clarity-bitcoin',
  },
clarityBitcoinLibV1: {
  "functions": {
    buffToU8: {"name":"buff-to-u8","access":"read_only","args":[{"name":"byte","type":{"buffer":{"length":1}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[byte: TypedAbiArg<Uint8Array, "byte">], bigint>,
    concatHeader: {"name":"concat-header","access":"read_only","args":[{"name":"block","type":{"tuple":[{"name":"height","type":"uint128"},{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"nbits","type":{"buffer":{"length":4}}},{"name":"nonce","type":{"buffer":{"length":4}}},{"name":"parent","type":{"buffer":{"length":32}}},{"name":"timestamp","type":{"buffer":{"length":4}}},{"name":"version","type":{"buffer":{"length":4}}}]}}],"outputs":{"type":{"buffer":{"length":80}}}} as TypedAbiFunction<[block: TypedAbiArg<{
  "height": number | bigint;
  "merkleRoot": Uint8Array;
  "nbits": Uint8Array;
  "nonce": Uint8Array;
  "parent": Uint8Array;
  "timestamp": Uint8Array;
  "version": Uint8Array;
}, "block">], Uint8Array>,
    concatIn: {"name":"concat-in","access":"read_only","args":[{"name":"in","type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]}},{"name":"result","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[_in: TypedAbiArg<{
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}, "_in">, result: TypedAbiArg<Uint8Array, "result">], Uint8Array>,
    concatIns: {"name":"concat-ins","access":"read_only","args":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]},"length":8}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[ins: TypedAbiArg<{
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}[], "ins">], Uint8Array>,
    concatOut: {"name":"concat-out","access":"read_only","args":[{"name":"out","type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]}},{"name":"result","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[out: TypedAbiArg<{
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}, "out">, result: TypedAbiArg<Uint8Array, "result">], Uint8Array>,
    concatOuts: {"name":"concat-outs","access":"read_only","args":[{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]},"length":8}}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[outs: TypedAbiArg<{
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}[], "outs">], Uint8Array>,
    concatTx: {"name":"concat-tx","access":"read_only","args":[{"name":"tx","type":{"tuple":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":{"buffer":{"length":4}}}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":{"buffer":{"length":4}}}]},"length":8}}},{"name":"locktime","type":{"buffer":{"length":4}}},{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":{"buffer":{"length":8}}}]},"length":8}}},{"name":"version","type":{"buffer":{"length":4}}}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[tx: TypedAbiArg<{
  "ins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": Uint8Array;
};
  "scriptSig": Uint8Array;
  "sequence": Uint8Array;
}[];
  "locktime": Uint8Array;
  "outs": {
  "scriptPubKey": Uint8Array;
  "value": Uint8Array;
}[];
  "version": Uint8Array;
}, "tx">], Uint8Array>,
    concatVar: {"name":"concat-var","access":"read_only","args":[{"name":"buffer","type":{"buffer":{"length":256}}}],"outputs":{"type":{"buffer":{"length":257}}}} as TypedAbiFunction<[buffer: TypedAbiArg<Uint8Array, "buffer">], Uint8Array>,
    getBcHHash: {"name":"get-bc-h-hash","access":"read_only","args":[{"name":"bh","type":"uint128"}],"outputs":{"type":{"optional":{"buffer":{"length":32}}}}} as TypedAbiFunction<[bh: TypedAbiArg<number | bigint, "bh">], Uint8Array | null>,
    getReversedTxid: {"name":"get-reversed-txid","access":"read_only","args":[{"name":"tx","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[tx: TypedAbiArg<Uint8Array, "tx">], Uint8Array>,
    getTxid: {"name":"get-txid","access":"read_only","args":[{"name":"tx","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[tx: TypedAbiArg<Uint8Array, "tx">], Uint8Array>,
    innerBuff32Permutation: {"name":"inner-buff32-permutation","access":"read_only","args":[{"name":"target-index","type":"uint128"},{"name":"state","type":{"tuple":[{"name":"hash-input","type":{"buffer":{"length":32}}},{"name":"hash-output","type":{"buffer":{"length":32}}}]}}],"outputs":{"type":{"tuple":[{"name":"hash-input","type":{"buffer":{"length":32}}},{"name":"hash-output","type":{"buffer":{"length":32}}}]}}} as TypedAbiFunction<[targetIndex: TypedAbiArg<number | bigint, "targetIndex">, state: TypedAbiArg<{
  "hashInput": Uint8Array;
  "hashOutput": Uint8Array;
}, "state">], {
  "hashInput": Uint8Array;
  "hashOutput": Uint8Array;
}>,
    innerMerkleProofVerify: {"name":"inner-merkle-proof-verify","access":"read_only","args":[{"name":"ctr","type":"uint128"},{"name":"state","type":{"tuple":[{"name":"cur-hash","type":{"buffer":{"length":32}}},{"name":"path","type":"uint128"},{"name":"proof-hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"root-hash","type":{"buffer":{"length":32}}},{"name":"tree-depth","type":"uint128"},{"name":"verified","type":"bool"}]}}],"outputs":{"type":{"tuple":[{"name":"cur-hash","type":{"buffer":{"length":32}}},{"name":"path","type":"uint128"},{"name":"proof-hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"root-hash","type":{"buffer":{"length":32}}},{"name":"tree-depth","type":"uint128"},{"name":"verified","type":"bool"}]}}} as TypedAbiFunction<[ctr: TypedAbiArg<number | bigint, "ctr">, state: TypedAbiArg<{
  "curHash": Uint8Array;
  "path": number | bigint;
  "proofHashes": Uint8Array[];
  "rootHash": Uint8Array;
  "treeDepth": number | bigint;
  "verified": boolean;
}, "state">], {
  "curHash": Uint8Array;
  "path": bigint;
  "proofHashes": Uint8Array[];
  "rootHash": Uint8Array;
  "treeDepth": bigint;
  "verified": boolean;
}>,
    innerReadSlice: {"name":"inner-read-slice","access":"read_only","args":[{"name":"chunk_size","type":"uint128"},{"name":"input","type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"buffer","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"},{"name":"remaining","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"buffer","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"},{"name":"remaining","type":"uint128"}]}}} as TypedAbiFunction<[chunk_size: TypedAbiArg<number | bigint, "chunk_size">, input: TypedAbiArg<{
  "acc": Uint8Array;
  "buffer": Uint8Array;
  "index": number | bigint;
  "remaining": number | bigint;
}, "input">], {
  "acc": Uint8Array;
  "buffer": Uint8Array;
  "index": bigint;
  "remaining": bigint;
}>,
    innerReadSlice1024: {"name":"inner-read-slice-1024","access":"read_only","args":[{"name":"ignored","type":"bool"},{"name":"input","type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"acc","type":{"buffer":{"length":1024}}},{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}} as TypedAbiFunction<[ignored: TypedAbiArg<boolean, "ignored">, input: TypedAbiArg<{
  "acc": Uint8Array;
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], {
  "acc": Uint8Array;
  "data": Uint8Array;
  "index": bigint;
}>,
    isBitSet: {"name":"is-bit-set","access":"read_only","args":[{"name":"val","type":"uint128"},{"name":"bit","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[val: TypedAbiArg<number | bigint, "val">, bit: TypedAbiArg<number | bigint, "bit">], boolean>,
    parseBlockHeader: {"name":"parse-block-header","access":"read_only","args":[{"name":"headerbuff","type":{"buffer":{"length":80}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"nbits","type":"uint128"},{"name":"nonce","type":"uint128"},{"name":"parent","type":{"buffer":{"length":32}}},{"name":"timestamp","type":"uint128"},{"name":"version","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[headerbuff: TypedAbiArg<Uint8Array, "headerbuff">], Response<{
  "merkleRoot": Uint8Array;
  "nbits": bigint;
  "nonce": bigint;
  "parent": Uint8Array;
  "timestamp": bigint;
  "version": bigint;
}, bigint>>,
    parseTx: {"name":"parse-tx","access":"read_only","args":[{"name":"tx","type":{"buffer":{"length":1024}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}},{"name":"locktime","type":"uint128"},{"name":"outs","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}},{"name":"version","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[tx: TypedAbiArg<Uint8Array, "tx">], Response<{
  "ins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": bigint;
};
  "scriptSig": Uint8Array;
  "sequence": bigint;
}[];
  "locktime": bigint;
  "outs": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
}[];
  "version": bigint;
}, bigint>>,
    readHashslice: {"name":"read-hashslice","access":"read_only","args":[{"name":"old-ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"hashslice","type":{"buffer":{"length":32}}}]},"error":"uint128"}}}} as TypedAbiFunction<[oldCtx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "oldCtx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "hashslice": Uint8Array;
}, bigint>>,
    readNextTxin: {"name":"read-next-txin","access":"read_only","args":[{"name":"ignored","type":"bool"},{"name":"state-res","type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ignored: TypedAbiArg<boolean, "ignored">, stateRes: TypedAbiArg<Response<{
  "ctx": {
  "index": number | bigint;
  "txbuff": Uint8Array;
};
  "remaining": number | bigint;
  "txins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": number | bigint;
};
  "scriptSig": Uint8Array;
  "sequence": number | bigint;
}[];
}, number | bigint>, "stateRes">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": bigint;
};
  "scriptSig": Uint8Array;
  "sequence": bigint;
}[];
}, bigint>>,
    readNextTxout: {"name":"read-next-txout","access":"read_only","args":[{"name":"ignored","type":"bool"},{"name":"state-res","type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txouts","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txouts","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ignored: TypedAbiArg<boolean, "ignored">, stateRes: TypedAbiArg<Response<{
  "ctx": {
  "index": number | bigint;
  "txbuff": Uint8Array;
};
  "remaining": number | bigint;
  "txouts": {
  "scriptPubKey": Uint8Array;
  "value": number | bigint;
}[];
}, number | bigint>, "stateRes">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txouts": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
}[];
}, bigint>>,
    readSlice: {"name":"read-slice","access":"read_only","args":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"offset","type":"uint128"},{"name":"size","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"buffer":{"length":1024}},"error":"uint128"}}}} as TypedAbiFunction<[data: TypedAbiArg<Uint8Array, "data">, offset: TypedAbiArg<number | bigint, "offset">, size: TypedAbiArg<number | bigint, "size">], Response<Uint8Array, bigint>>,
    readSlice1: {"name":"read-slice-1","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice128: {"name":"read-slice-128","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice16: {"name":"read-slice-16","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice2: {"name":"read-slice-2","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice256: {"name":"read-slice-256","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice32: {"name":"read-slice-32","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice4: {"name":"read-slice-4","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice512: {"name":"read-slice-512","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice64: {"name":"read-slice-64","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readSlice8: {"name":"read-slice-8","access":"read_only","args":[{"name":"input","type":{"tuple":[{"name":"data","type":{"buffer":{"length":1024}}},{"name":"index","type":"uint128"}]}}],"outputs":{"type":{"buffer":{"length":1024}}}} as TypedAbiFunction<[input: TypedAbiArg<{
  "data": Uint8Array;
  "index": number | bigint;
}, "input">], Uint8Array>,
    readTxins: {"name":"read-txins","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txins","type":{"list":{"type":{"tuple":[{"name":"outpoint","type":{"tuple":[{"name":"hash","type":{"buffer":{"length":32}}},{"name":"index","type":"uint128"}]}},{"name":"scriptSig","type":{"buffer":{"length":256}}},{"name":"sequence","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txins": {
  "outpoint": {
  "hash": Uint8Array;
  "index": bigint;
};
  "scriptSig": Uint8Array;
  "sequence": bigint;
}[];
}, bigint>>,
    readTxouts: {"name":"read-txouts","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"remaining","type":"uint128"},{"name":"txouts","type":{"list":{"type":{"tuple":[{"name":"scriptPubKey","type":{"buffer":{"length":128}}},{"name":"value","type":"uint128"}]},"length":8}}}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "remaining": bigint;
  "txouts": {
  "scriptPubKey": Uint8Array;
  "value": bigint;
}[];
}, bigint>>,
    readUint16: {"name":"read-uint16","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"uint16","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "uint16": bigint;
}, bigint>>,
    readUint32: {"name":"read-uint32","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"uint32","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "uint32": bigint;
}, bigint>>,
    readUint64: {"name":"read-uint64","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"uint64","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "uint64": bigint;
}, bigint>>,
    readVarint: {"name":"read-varint","access":"read_only","args":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"varint","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[ctx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "ctx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "varint": bigint;
}, bigint>>,
    readVarslice: {"name":"read-varslice","access":"read_only","args":[{"name":"old-ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"ctx","type":{"tuple":[{"name":"index","type":"uint128"},{"name":"txbuff","type":{"buffer":{"length":1024}}}]}},{"name":"varslice","type":{"buffer":{"length":1024}}}]},"error":"uint128"}}}} as TypedAbiFunction<[oldCtx: TypedAbiArg<{
  "index": number | bigint;
  "txbuff": Uint8Array;
}, "oldCtx">], Response<{
  "ctx": {
  "index": bigint;
  "txbuff": Uint8Array;
};
  "varslice": Uint8Array;
}, bigint>>,
    reverseBuff32: {"name":"reverse-buff32","access":"read_only","args":[{"name":"input","type":{"buffer":{"length":32}}}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[input: TypedAbiArg<Uint8Array, "input">], Uint8Array>,
    verifyBlockHeader: {"name":"verify-block-header","access":"read_only","args":[{"name":"headerbuff","type":{"buffer":{"length":80}}},{"name":"expected-block-height","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[headerbuff: TypedAbiArg<Uint8Array, "headerbuff">, expectedBlockHeight: TypedAbiArg<number | bigint, "expectedBlockHeight">], boolean>,
    verifyMerkleProof: {"name":"verify-merkle-proof","access":"read_only","args":[{"name":"reversed-txid","type":{"buffer":{"length":32}}},{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"proof","type":{"tuple":[{"name":"hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"tree-depth","type":"uint128"},{"name":"tx-index","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[reversedTxid: TypedAbiArg<Uint8Array, "reversedTxid">, merkleRoot: TypedAbiArg<Uint8Array, "merkleRoot">, proof: TypedAbiArg<{
  "hashes": Uint8Array[];
  "treeDepth": number | bigint;
  "txIndex": number | bigint;
}, "proof">], Response<boolean, bigint>>,
    wasTxMined: {"name":"was-tx-mined","access":"read_only","args":[{"name":"block","type":{"tuple":[{"name":"height","type":"uint128"},{"name":"merkle-root","type":{"buffer":{"length":32}}},{"name":"nbits","type":{"buffer":{"length":4}}},{"name":"nonce","type":{"buffer":{"length":4}}},{"name":"parent","type":{"buffer":{"length":32}}},{"name":"timestamp","type":{"buffer":{"length":4}}},{"name":"version","type":{"buffer":{"length":4}}}]}},{"name":"tx","type":{"buffer":{"length":1024}}},{"name":"proof","type":{"tuple":[{"name":"hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"tree-depth","type":"uint128"},{"name":"tx-index","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[block: TypedAbiArg<{
  "height": number | bigint;
  "merkleRoot": Uint8Array;
  "nbits": Uint8Array;
  "nonce": Uint8Array;
  "parent": Uint8Array;
  "timestamp": Uint8Array;
  "version": Uint8Array;
}, "block">, tx: TypedAbiArg<Uint8Array, "tx">, proof: TypedAbiArg<{
  "hashes": Uint8Array[];
  "treeDepth": number | bigint;
  "txIndex": number | bigint;
}, "proof">], Response<boolean, bigint>>,
    wasTxMinedCompact: {"name":"was-tx-mined-compact","access":"read_only","args":[{"name":"block","type":{"tuple":[{"name":"header","type":{"buffer":{"length":80}}},{"name":"height","type":"uint128"}]}},{"name":"tx","type":{"buffer":{"length":1024}}},{"name":"proof","type":{"tuple":[{"name":"hashes","type":{"list":{"type":{"buffer":{"length":32}},"length":12}}},{"name":"tree-depth","type":"uint128"},{"name":"tx-index","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[block: TypedAbiArg<{
  "header": Uint8Array;
  "height": number | bigint;
}, "block">, tx: TypedAbiArg<Uint8Array, "tx">, proof: TypedAbiArg<{
  "hashes": Uint8Array[];
  "treeDepth": number | bigint;
  "txIndex": number | bigint;
}, "proof">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    BUFF_TO_BYTE: {
  name: 'BUFF_TO_BYTE',
  type: {
    list: {
      type: {
        buffer: {
          length: 1
        }
      },
      length: 256
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array[]>,
    ERR_BAD_HEADER: {
  name: 'ERR-BAD-HEADER',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_OUT_OF_BOUNDS: {
  name: 'ERR-OUT-OF-BOUNDS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_PROOF_TOO_SHORT: {
  name: 'ERR-PROOF-TOO-SHORT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_TOO_MANY_TXINS: {
  name: 'ERR-TOO-MANY-TXINS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_TOO_MANY_TXOUTS: {
  name: 'ERR-TOO-MANY-TXOUTS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_VARSLICE_TOO_LONG: {
  name: 'ERR-VARSLICE-TOO-LONG',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    lIST_128: {
  name: 'LIST_128',
  type: {
    list: {
      type: 'bool',
      length: 128
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_16: {
  name: 'LIST_16',
  type: {
    list: {
      type: 'bool',
      length: 16
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_256: {
  name: 'LIST_256',
  type: {
    list: {
      type: 'bool',
      length: 256
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_32: {
  name: 'LIST_32',
  type: {
    list: {
      type: 'bool',
      length: 32
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_512: {
  name: 'LIST_512',
  type: {
    list: {
      type: 'bool',
      length: 512
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>,
    lIST_64: {
  name: 'LIST_64',
  type: {
    list: {
      type: 'bool',
      length: 64
    }
  },
  access: 'constant'
} as TypedAbiVariable<boolean[]>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'clarity-bitcoin-lib-v1',
  },
miamicoinAuth: {
  "functions": {
    generateArgumentId: {"name":"generate-argument-id","access":"private","args":[{"name":"jobId","type":"uint128"},{"name":"argumentType","type":{"string-ascii":{"length":25}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentType: TypedAbiArg<string, "argumentType">], bigint>,
    guardAddArgument: {"name":"guard-add-argument","access":"private","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], Response<boolean, bigint>>,
    isAuthorizedCity: {"name":"is-authorized-city","access":"private","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    activateCoreContract: {"name":"activate-core-contract","access":"public","args":[{"name":"targetContract","type":"principal"},{"name":"stacksHeight","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[targetContract: TypedAbiArg<string, "targetContract">, stacksHeight: TypedAbiArg<number | bigint, "stacksHeight">], Response<boolean, bigint>>,
    activateJob: {"name":"activate-job","access":"public","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], Response<boolean, bigint>>,
    addPrincipalArgument: {"name":"add-principal-argument","access":"public","args":[{"name":"jobId","type":"uint128"},{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"value","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentName: TypedAbiArg<string, "argumentName">, value: TypedAbiArg<string, "value">], Response<boolean, bigint>>,
    addUintArgument: {"name":"add-uint-argument","access":"public","args":[{"name":"jobId","type":"uint128"},{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"value","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentName: TypedAbiArg<string, "argumentName">, value: TypedAbiArg<number | bigint, "value">], Response<boolean, bigint>>,
    approveJob: {"name":"approve-job","access":"public","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], Response<boolean, bigint>>,
    createJob: {"name":"create-job","access":"public","args":[{"name":"name","type":{"string-ascii":{"length":255}}},{"name":"target","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[name: TypedAbiArg<string, "name">, target: TypedAbiArg<string, "target">], Response<bigint, bigint>>,
    disapproveJob: {"name":"disapprove-job","access":"public","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], Response<boolean, bigint>>,
    executeReplaceApproverJob: {"name":"execute-replace-approver-job","access":"public","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], Response<boolean, bigint>>,
    executeSetCityWalletJob: {"name":"execute-set-city-wallet-job","access":"public","args":[{"name":"jobId","type":"uint128"},{"name":"targetContract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, targetContract: TypedAbiArg<string, "targetContract">], Response<boolean, bigint>>,
    executeUpgradeCoreContractJob: {"name":"execute-upgrade-core-contract-job","access":"public","args":[{"name":"jobId","type":"uint128"},{"name":"oldContract","type":"trait_reference"},{"name":"newContract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, oldContract: TypedAbiArg<string, "oldContract">, newContract: TypedAbiArg<string, "newContract">], Response<boolean, bigint>>,
    initializeContracts: {"name":"initialize-contracts","access":"public","args":[{"name":"coreContract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[coreContract: TypedAbiArg<string, "coreContract">], Response<boolean, bigint>>,
    markJobAsExecuted: {"name":"mark-job-as-executed","access":"public","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], Response<boolean, bigint>>,
    setCityWallet: {"name":"set-city-wallet","access":"public","args":[{"name":"targetContract","type":"trait_reference"},{"name":"newCityWallet","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[targetContract: TypedAbiArg<string, "targetContract">, newCityWallet: TypedAbiArg<string, "newCityWallet">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"targetContract","type":"trait_reference"},{"name":"newUri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[targetContract: TypedAbiArg<string, "targetContract">, newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    upgradeCoreContract: {"name":"upgrade-core-contract","access":"public","args":[{"name":"oldContract","type":"trait_reference"},{"name":"newContract","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[oldContract: TypedAbiArg<string, "oldContract">, newContract: TypedAbiArg<string, "newContract">], Response<boolean, bigint>>,
    getActiveCoreContract: {"name":"get-active-core-contract","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"uint128"}}}} as TypedAbiFunction<[], Response<string, bigint>>,
    getCityWallet: {"name":"get-city-wallet","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getCoreContractInfo: {"name":"get-core-contract-info","access":"read_only","args":[{"name":"targetContract","type":"principal"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"endHeight","type":"uint128"},{"name":"startHeight","type":"uint128"},{"name":"state","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[targetContract: TypedAbiArg<string, "targetContract">], Response<{
  "endHeight": bigint;
  "startHeight": bigint;
  "state": bigint;
}, bigint>>,
    getJob: {"name":"get-job","access":"read_only","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"approvals","type":"uint128"},{"name":"creator","type":"principal"},{"name":"disapprovals","type":"uint128"},{"name":"isActive","type":"bool"},{"name":"isExecuted","type":"bool"},{"name":"name","type":{"string-ascii":{"length":255}}},{"name":"target","type":"principal"}]}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], {
  "approvals": bigint;
  "creator": string;
  "disapprovals": bigint;
  "isActive": boolean;
  "isExecuted": boolean;
  "name": string;
  "target": string;
} | null>,
    getLastJobId: {"name":"get-last-job-id","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getPrincipalArgumentById: {"name":"get-principal-argument-by-id","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentId","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"value","type":"principal"}]}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentId: TypedAbiArg<number | bigint, "argumentId">], {
  "argumentName": string;
  "value": string;
} | null>,
    getPrincipalArgumentByName: {"name":"get-principal-argument-by-name","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentName","type":{"string-ascii":{"length":255}}}],"outputs":{"type":{"optional":{"tuple":[{"name":"argumentId","type":"uint128"},{"name":"value","type":"principal"}]}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentName: TypedAbiArg<string, "argumentName">], {
  "argumentId": bigint;
  "value": string;
} | null>,
    getPrincipalValueById: {"name":"get-principal-value-by-id","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentId","type":"uint128"}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentId: TypedAbiArg<number | bigint, "argumentId">], string | null>,
    getPrincipalValueByName: {"name":"get-principal-value-by-name","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentName","type":{"string-ascii":{"length":255}}}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentName: TypedAbiArg<string, "argumentName">], string | null>,
    getUintArgumentById: {"name":"get-uint-argument-by-id","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentId","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"value","type":"uint128"}]}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentId: TypedAbiArg<number | bigint, "argumentId">], {
  "argumentName": string;
  "value": bigint;
} | null>,
    getUintArgumentByName: {"name":"get-uint-argument-by-name","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentName","type":{"string-ascii":{"length":255}}}],"outputs":{"type":{"optional":{"tuple":[{"name":"argumentId","type":"uint128"},{"name":"value","type":"uint128"}]}}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentName: TypedAbiArg<string, "argumentName">], {
  "argumentId": bigint;
  "value": bigint;
} | null>,
    getUintValueById: {"name":"get-uint-value-by-id","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentId","type":"uint128"}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentId: TypedAbiArg<number | bigint, "argumentId">], bigint | null>,
    getUintValueByName: {"name":"get-uint-value-by-name","access":"read_only","args":[{"name":"jobId","type":"uint128"},{"name":"argumentName","type":{"string-ascii":{"length":255}}}],"outputs":{"type":{"optional":"uint128"}}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">, argumentName: TypedAbiArg<string, "argumentName">], bigint | null>,
    isApprover: {"name":"is-approver","access":"read_only","args":[{"name":"user","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[user: TypedAbiArg<string, "user">], boolean>,
    isInitialized: {"name":"is-initialized","access":"read_only","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    isJobApproved: {"name":"is-job-approved","access":"read_only","args":[{"name":"jobId","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[jobId: TypedAbiArg<number | bigint, "jobId">], boolean>
  },
  "maps": {
    approvers: {"name":"Approvers","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    argumentLastIdsByType: {"name":"ArgumentLastIdsByType","key":{"tuple":[{"name":"argumentType","type":{"string-ascii":{"length":25}}},{"name":"jobId","type":"uint128"}]},"value":"uint128"} as TypedAbiMap<{
  "argumentType": string;
  "jobId": number | bigint;
}, bigint>,
    coreContracts: {"name":"CoreContracts","key":"principal","value":{"tuple":[{"name":"endHeight","type":"uint128"},{"name":"startHeight","type":"uint128"},{"name":"state","type":"uint128"}]}} as TypedAbiMap<string, {
  "endHeight": bigint;
  "startHeight": bigint;
  "state": bigint;
}>,
    jobApprovers: {"name":"JobApprovers","key":{"tuple":[{"name":"approver","type":"principal"},{"name":"jobId","type":"uint128"}]},"value":"bool"} as TypedAbiMap<{
  "approver": string;
  "jobId": number | bigint;
}, boolean>,
    jobs: {"name":"Jobs","key":"uint128","value":{"tuple":[{"name":"approvals","type":"uint128"},{"name":"creator","type":"principal"},{"name":"disapprovals","type":"uint128"},{"name":"isActive","type":"bool"},{"name":"isExecuted","type":"bool"},{"name":"name","type":{"string-ascii":{"length":255}}},{"name":"target","type":"principal"}]}} as TypedAbiMap<number | bigint, {
  "approvals": bigint;
  "creator": string;
  "disapprovals": bigint;
  "isActive": boolean;
  "isExecuted": boolean;
  "name": string;
  "target": string;
}>,
    principalArgumentsById: {"name":"PrincipalArgumentsById","key":{"tuple":[{"name":"argumentId","type":"uint128"},{"name":"jobId","type":"uint128"}]},"value":{"tuple":[{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"value","type":"principal"}]}} as TypedAbiMap<{
  "argumentId": number | bigint;
  "jobId": number | bigint;
}, {
  "argumentName": string;
  "value": string;
}>,
    principalArgumentsByName: {"name":"PrincipalArgumentsByName","key":{"tuple":[{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"jobId","type":"uint128"}]},"value":{"tuple":[{"name":"argumentId","type":"uint128"},{"name":"value","type":"principal"}]}} as TypedAbiMap<{
  "argumentName": string;
  "jobId": number | bigint;
}, {
  "argumentId": bigint;
  "value": string;
}>,
    uIntArgumentsById: {"name":"UIntArgumentsById","key":{"tuple":[{"name":"argumentId","type":"uint128"},{"name":"jobId","type":"uint128"}]},"value":{"tuple":[{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"value","type":"uint128"}]}} as TypedAbiMap<{
  "argumentId": number | bigint;
  "jobId": number | bigint;
}, {
  "argumentName": string;
  "value": bigint;
}>,
    uIntArgumentsByName: {"name":"UIntArgumentsByName","key":{"tuple":[{"name":"argumentName","type":{"string-ascii":{"length":255}}},{"name":"jobId","type":"uint128"}]},"value":{"tuple":[{"name":"argumentId","type":"uint128"},{"name":"value","type":"uint128"}]}} as TypedAbiMap<{
  "argumentName": string;
  "jobId": number | bigint;
}, {
  "argumentId": bigint;
  "value": bigint;
}>
  },
  "variables": {
    CONTRACT_OWNER: {
  name: 'CONTRACT_OWNER',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    ERR_ALREADY_VOTED_THIS_WAY: {
  name: 'ERR_ALREADY_VOTED_THIS_WAY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_ARGUMENT_ALREADY_EXISTS: {
  name: 'ERR_ARGUMENT_ALREADY_EXISTS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_CORE_CONTRACT_NOT_FOUND: {
  name: 'ERR_CORE_CONTRACT_NOT_FOUND',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_JOB_IS_ACTIVE: {
  name: 'ERR_JOB_IS_ACTIVE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_JOB_IS_EXECUTED: {
  name: 'ERR_JOB_IS_EXECUTED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_JOB_IS_NOT_ACTIVE: {
  name: 'ERR_JOB_IS_NOT_ACTIVE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_JOB_IS_NOT_APPROVED: {
  name: 'ERR_JOB_IS_NOT_APPROVED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_NO_ACTIVE_CORE_CONTRACT: {
  name: 'ERR_NO_ACTIVE_CORE_CONTRACT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_UNKNOWN_ARGUMENT: {
  name: 'ERR_UNKNOWN_ARGUMENT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_UNKNOWN_JOB: {
  name: 'ERR_UNKNOWN_JOB',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    REQUIRED_APPROVALS: {
  name: 'REQUIRED_APPROVALS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STATE_ACTIVE: {
  name: 'STATE_ACTIVE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STATE_DEPLOYED: {
  name: 'STATE_DEPLOYED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STATE_INACTIVE: {
  name: 'STATE_INACTIVE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    activeCoreContract: {
  name: 'activeCoreContract',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    cityWallet: {
  name: 'cityWallet',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    initialized: {
  name: 'initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    lastJobId: {
  name: 'lastJobId',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'miamicoin-auth',
  },
miamicoinToken: {
  "functions": {
    checkErr: {"name":"check-err","access":"private","args":[{"name":"result","type":{"response":{"ok":"bool","error":"uint128"}}},{"name":"prior","type":{"response":{"ok":"bool","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[result: TypedAbiArg<Response<boolean, number | bigint>, "result">, prior: TypedAbiArg<Response<boolean, number | bigint>, "prior">], Response<boolean, bigint>>,
    isAuthorizedAuth: {"name":"is-authorized-auth","access":"private","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    sendToken: {"name":"send-token","access":"private","args":[{"name":"recipient","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"to","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipient: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "to": string;
}, "recipient">], Response<boolean, bigint>>,
    sendTokenWithMemo: {"name":"send-token-with-memo","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    activateToken: {"name":"activate-token","access":"public","args":[{"name":"coreContract","type":"principal"},{"name":"stacksHeight","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[coreContract: TypedAbiArg<string, "coreContract">, stacksHeight: TypedAbiArg<number | bigint, "stacksHeight">], Response<boolean, bigint>>,
    burn: {"name":"burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    mint: {"name":"mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    sendMany: {"name":"send-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"to","type":"principal"}]},"length":200}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "to": string;
}[], "recipients">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"newUri","type":{"optional":{"string-utf8":{"length":256}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"user","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[user: TypedAbiArg<string, "user">], Response<bigint, null>>,
    getCoinbaseThresholds: {"name":"get-coinbase-thresholds","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"coinbaseThreshold1","type":"uint128"},{"name":"coinbaseThreshold2","type":"uint128"},{"name":"coinbaseThreshold3","type":"uint128"},{"name":"coinbaseThreshold4","type":"uint128"},{"name":"coinbaseThreshold5","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[], Response<{
  "coinbaseThreshold1": bigint;
  "coinbaseThreshold2": bigint;
  "coinbaseThreshold3": bigint;
  "coinbaseThreshold4": bigint;
  "coinbaseThreshold5": bigint;
}, bigint>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":9}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":3}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    CONTRACT_OWNER: {
  name: 'CONTRACT_OWNER',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    ERR_TOKEN_ALREADY_ACTIVATED: {
  name: 'ERR_TOKEN_ALREADY_ACTIVATED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_TOKEN_NOT_ACTIVATED: {
  name: 'ERR_TOKEN_NOT_ACTIVATED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STATE_ACTIVE: {
  name: 'STATE_ACTIVE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STATE_DEPLOYED: {
  name: 'STATE_DEPLOYED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    STATE_INACTIVE: {
  name: 'STATE_INACTIVE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    TOKEN_HALVING_BLOCKS: {
  name: 'TOKEN_HALVING_BLOCKS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    coinbaseThreshold1: {
  name: 'coinbaseThreshold1',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    coinbaseThreshold2: {
  name: 'coinbaseThreshold2',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    coinbaseThreshold3: {
  name: 'coinbaseThreshold3',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    coinbaseThreshold4: {
  name: 'coinbaseThreshold4',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    coinbaseThreshold5: {
  name: 'coinbaseThreshold5',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenActivated: {
  name: 'tokenActivated',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    tokenUri: {
  name: 'tokenUri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"miamicoin"}],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'miamicoin-token',
  },
nftTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'nft-trait',
  },
oracleV1: {
  "functions": {
    addAndShiftUintOffsets: {"name":"add-and-shift-uint-offsets","access":"private","args":[{"name":"idx","type":"uint128"},{"name":"input","type":{"tuple":[{"name":"acc","type":"uint128"},{"name":"data","type":{"buffer":{"length":256}}}]}}],"outputs":{"type":{"tuple":[{"name":"acc","type":"uint128"},{"name":"data","type":{"buffer":{"length":256}}}]}}} as TypedAbiFunction<[idx: TypedAbiArg<number | bigint, "idx">, input: TypedAbiArg<{
  "acc": number | bigint;
  "data": Uint8Array;
}, "input">], {
  "acc": bigint;
  "data": Uint8Array;
}>,
    buffToAscii: {"name":"buff-to-ascii","access":"private","args":[{"name":"byte","type":{"buffer":{"length":1}}}],"outputs":{"type":{"string-ascii":{"length":1}}}} as TypedAbiFunction<[byte: TypedAbiArg<Uint8Array, "byte">], string>,
    buffToString: {"name":"buff-to-string","access":"private","args":[{"name":"msg","type":{"buffer":{"length":256}}},{"name":"symbol-offset","type":"uint128"},{"name":"symbol-length","type":"uint128"}],"outputs":{"type":{"string-ascii":{"length":32}}}} as TypedAbiFunction<[msg: TypedAbiArg<Uint8Array, "msg">, symbolOffset: TypedAbiArg<number | bigint, "symbolOffset">, symbolLength: TypedAbiArg<number | bigint, "symbolLength">], string>,
    buffToU8: {"name":"buff-to-u8","access":"private","args":[{"name":"byte","type":{"buffer":{"length":1}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[byte: TypedAbiArg<Uint8Array, "byte">], bigint>,
    buffToUint: {"name":"buff-to-uint","access":"private","args":[{"name":"word","type":{"buffer":{"length":256}}},{"name":"offsets","type":{"list":{"type":"uint128","length":8}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[word: TypedAbiArg<Uint8Array, "word">, offsets: TypedAbiArg<number | bigint[], "offsets">], bigint>,
    callAddPrice: {"name":"call-add-price","access":"private","args":[{"name":"price","type":{"tuple":[{"name":"msg","type":{"buffer":{"length":256}}},{"name":"sig","type":{"buffer":{"length":65}}},{"name":"src","type":{"string-ascii":{"length":16}}}]}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[price: TypedAbiArg<{
  "msg": Uint8Array;
  "sig": Uint8Array;
  "src": string;
}, "price">], boolean>,
    constructString: {"name":"construct-string","access":"private","args":[{"name":"idx","type":"uint128"},{"name":"input","type":{"tuple":[{"name":"acc","type":{"string-ascii":{"length":32}}},{"name":"data","type":{"buffer":{"length":256}}},{"name":"length","type":"uint128"},{"name":"offset","type":"uint128"}]}}],"outputs":{"type":{"tuple":[{"name":"acc","type":{"string-ascii":{"length":32}}},{"name":"data","type":{"buffer":{"length":256}}},{"name":"length","type":"uint128"},{"name":"offset","type":"uint128"}]}}} as TypedAbiFunction<[idx: TypedAbiArg<number | bigint, "idx">, input: TypedAbiArg<{
  "acc": string;
  "data": Uint8Array;
  "length": number | bigint;
  "offset": number | bigint;
}, "input">], {
  "acc": string;
  "data": Uint8Array;
  "length": bigint;
  "offset": bigint;
}>,
    addPrice: {"name":"add-price","access":"public","args":[{"name":"source","type":{"string-ascii":{"length":16}}},{"name":"msg","type":{"buffer":{"length":256}}},{"name":"sig","type":{"buffer":{"length":65}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[source: TypedAbiArg<string, "source">, msg: TypedAbiArg<Uint8Array, "msg">, sig: TypedAbiArg<Uint8Array, "sig">], Response<boolean, bigint>>,
    addPrices: {"name":"add-prices","access":"public","args":[{"name":"prices","type":{"list":{"type":{"tuple":[{"name":"msg","type":{"buffer":{"length":256}}},{"name":"sig","type":{"buffer":{"length":65}}},{"name":"src","type":{"string-ascii":{"length":16}}}]},"length":100}}}],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[prices: TypedAbiArg<{
  "msg": Uint8Array;
  "sig": Uint8Array;
  "src": string;
}[], "prices">], Response<boolean, null>>,
    addSource: {"name":"add-source","access":"public","args":[{"name":"source","type":{"string-ascii":{"length":16}}},{"name":"public-key","type":{"buffer":{"length":33}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[source: TypedAbiArg<string, "source">, publicKey: TypedAbiArg<Uint8Array, "publicKey">], Response<boolean, bigint>>,
    revokeSource: {"name":"revoke-source","access":"public","args":[{"name":"source","type":{"string-ascii":{"length":16}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[source: TypedAbiArg<string, "source">], Response<boolean, bigint>>,
    checkSource: {"name":"check-source","access":"read_only","args":[{"name":"source","type":{"string-ascii":{"length":16}}}],"outputs":{"type":{"optional":{"tuple":[{"name":"public-key","type":{"buffer":{"length":33}}}]}}}} as TypedAbiFunction<[source: TypedAbiArg<string, "source">], {
  "publicKey": Uint8Array;
} | null>,
    extractAmount: {"name":"extract-amount","access":"read_only","args":[{"name":"msg","type":{"buffer":{"length":256}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[msg: TypedAbiArg<Uint8Array, "msg">], bigint>,
    extractSymbol: {"name":"extract-symbol","access":"read_only","args":[{"name":"msg","type":{"buffer":{"length":256}}}],"outputs":{"type":{"string-ascii":{"length":32}}}} as TypedAbiFunction<[msg: TypedAbiArg<Uint8Array, "msg">], string>,
    extractTimestamp: {"name":"extract-timestamp","access":"read_only","args":[{"name":"msg","type":{"buffer":{"length":256}}}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[msg: TypedAbiArg<Uint8Array, "msg">], bigint>,
    getPrice: {"name":"get-price","access":"read_only","args":[{"name":"source","type":{"string-ascii":{"length":16}}},{"name":"symbol","type":{"string-ascii":{"length":32}}}],"outputs":{"type":{"optional":{"tuple":[{"name":"amount","type":"uint128"},{"name":"height","type":"uint128"},{"name":"timestamp","type":"uint128"}]}}}} as TypedAbiFunction<[source: TypedAbiArg<string, "source">, symbol: TypedAbiArg<string, "symbol">], {
  "amount": bigint;
  "height": bigint;
  "timestamp": bigint;
} | null>,
    verifySignature: {"name":"verify-signature","access":"read_only","args":[{"name":"msg","type":{"buffer":{"length":256}}},{"name":"signature","type":{"buffer":{"length":65}}},{"name":"public-key","type":{"buffer":{"length":33}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[msg: TypedAbiArg<Uint8Array, "msg">, signature: TypedAbiArg<Uint8Array, "signature">, publicKey: TypedAbiArg<Uint8Array, "publicKey">], boolean>
  },
  "maps": {
    oracleData: {"name":"oracle-data","key":{"tuple":[{"name":"source","type":{"string-ascii":{"length":16}}},{"name":"symbol","type":{"string-ascii":{"length":32}}}]},"value":{"tuple":[{"name":"amount","type":"uint128"},{"name":"height","type":"uint128"},{"name":"timestamp","type":"uint128"}]}} as TypedAbiMap<{
  "source": string;
  "symbol": string;
}, {
  "amount": bigint;
  "height": bigint;
  "timestamp": bigint;
}>,
    sources: {"name":"sources","key":{"tuple":[{"name":"source","type":{"string-ascii":{"length":16}}}]},"value":{"tuple":[{"name":"public-key","type":{"buffer":{"length":33}}}]}} as TypedAbiMap<{
  "source": string;
}, {
  "publicKey": Uint8Array;
}>
  },
  "variables": {
    bUFF_TO_UINT8: {
  name: 'BUFF_TO_UINT8',
  type: {
    list: {
      type: {
        buffer: {
          length: 1
        }
      },
      length: 256
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array[]>,
    uINT8_TO_ASCII: {
  name: 'UINT8_TO_ASCII',
  type: {
    list: {
      type: {
        'string-ascii': {
          length: 1
        }
      },
      length: 240
    }
  },
  access: 'constant'
} as TypedAbiVariable<string[]>,
    contractOwner: {
  name: 'contract-owner',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    errIncorrectSignature: {
  name: 'err-incorrect-signature',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errNotOwner: {
  name: 'err-not-owner',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errOlderTimestamp: {
  name: 'err-older-timestamp',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errRecover: {
  name: 'err-recover',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ethPreamble: {
  name: 'eth-preamble',
  type: {
    buffer: {
      length: 28
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    offsetsAmount: {
  name: 'offsets-amount',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'variable'
} as TypedAbiVariable<bigint[]>,
    offsetsSymbolLength: {
  name: 'offsets-symbol-length',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'variable'
} as TypedAbiVariable<bigint[]>,
    offsetsSymbolOffset: {
  name: 'offsets-symbol-offset',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'variable'
} as TypedAbiVariable<bigint[]>,
    offsetsTimestamp: {
  name: 'offsets-timestamp',
  type: {
    list: {
      type: 'uint128',
      length: 8
    }
  },
  access: 'variable'
} as TypedAbiVariable<bigint[]>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'oracle-v1',
  },
sendManyMemo: {
  "functions": {
    checkErr: {"name":"check-err","access":"private","args":[{"name":"result","type":{"response":{"ok":"bool","error":"uint128"}}},{"name":"prior","type":{"response":{"ok":"bool","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[result: TypedAbiArg<Response<boolean, number | bigint>, "result">, prior: TypedAbiArg<Response<boolean, number | bigint>, "prior">], Response<boolean, bigint>>,
    sendStx: {"name":"send-stx","access":"private","args":[{"name":"recipient","type":{"tuple":[{"name":"memo","type":{"buffer":{"length":34}}},{"name":"to","type":"principal"},{"name":"ustx","type":"uint128"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipient: TypedAbiArg<{
  "memo": Uint8Array;
  "to": string;
  "ustx": number | bigint;
}, "recipient">], Response<boolean, bigint>>,
    sendMany: {"name":"send-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"memo","type":{"buffer":{"length":34}}},{"name":"to","type":"principal"},{"name":"ustx","type":"uint128"}]},"length":200}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "memo": Uint8Array;
  "to": string;
  "ustx": number | bigint;
}[], "recipients">], Response<boolean, bigint>>,
    sendStxWithMemo: {"name":"send-stx-with-memo","access":"public","args":[{"name":"ustx","type":"uint128"},{"name":"to","type":"principal"},{"name":"memo","type":{"buffer":{"length":34}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[ustx: TypedAbiArg<number | bigint, "ustx">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array, "memo">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'send-many-memo',
  },
sip010TraitFtStandard: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'sip-010-trait-ft-standard',
  }
} as const;

export const accounts = {"deployer":{"address":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","balance":"100000000000000"},"wallet_1":{"address":"ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5","balance":"100000000000000"},"wallet_2":{"address":"ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG","balance":"100000000000000"},"wallet_3":{"address":"ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC","balance":"100000000000000"},"wallet_4":{"address":"ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND","balance":"100000000000000"},"wallet_5":{"address":"ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB","balance":"100000000000000"},"wallet_6":{"address":"ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0","balance":"100000000000000"},"wallet_7":{"address":"ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ","balance":"100000000000000"},"wallet_8":{"address":"ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP","balance":"100000000000000"},"wallet_9":{"address":"STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6","balance":"100000000000000"}} as const;

export const identifiers = {"btcStxSwap":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.btc-stx-swap","citycoinCoreTrait":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.citycoin-core-trait","citycoinTokenTrait":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.citycoin-token-trait","clarityBitcoin":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.clarity-bitcoin","clarityBitcoinLibV1":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.clarity-bitcoin-lib-v1","miamicoinAuth":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-auth","miamicoinToken":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token","nftTrait":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait","oracleV1":"SPZ0RAC1EFTH949T4W2SYY6YBHJRMAF4ECT5A7DD.oracle-v1","sendManyMemo":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.send-many-memo","sip010TraitFtStandard":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard"} as const

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;


export const deployments = {"btcStxSwap":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.btc-stx-swap","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.btc-stx-swap","testnet":null,"mainnet":null},"citycoinCoreTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.citycoin-core-trait","simnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.citycoin-core-trait","testnet":null,"mainnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.citycoin-core-trait"},"citycoinTokenTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.citycoin-token-trait","simnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.citycoin-token-trait","testnet":null,"mainnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.citycoin-token-trait"},"clarityBitcoin":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.clarity-bitcoin","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.clarity-bitcoin","testnet":null,"mainnet":null},"clarityBitcoinLibV1":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.clarity-bitcoin-lib-v1","simnet":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.clarity-bitcoin-lib-v1","testnet":null,"mainnet":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.clarity-bitcoin-lib-v1"},"miamicoinAuth":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.miamicoin-auth","simnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-auth","testnet":null,"mainnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-auth"},"miamicoinToken":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.miamicoin-token","simnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token","testnet":null,"mainnet":"SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token"},"nftTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.nft-trait","simnet":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait","testnet":null,"mainnet":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait"},"oracleV1":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.oracle-v1","simnet":"SPZ0RAC1EFTH949T4W2SYY6YBHJRMAF4ECT5A7DD.oracle-v1","testnet":null,"mainnet":"SPZ0RAC1EFTH949T4W2SYY6YBHJRMAF4ECT5A7DD.oracle-v1"},"sendManyMemo":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.send-many-memo","simnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.send-many-memo","testnet":null,"mainnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.send-many-memo"},"sip010TraitFtStandard":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip-010-trait-ft-standard","simnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard","testnet":null,"mainnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard"}} as const;

export const project = {
  contracts,
  deployments,
} as const;
  