import {
    LCDClient,
    MnemonicKey,
    MsgExecuteContract,
} from "@terra-money/terra.js";

const lcd = new LCDClient ({
    URL: "https://columbus-lcd.terra.dev/",
    chainID: "columbus-5",
})

const mk = new MnemonicKey({
    mnemonic:
        "cushion cancel mind display laugh tired video inch state run awkward job under smart tongue theory twice aisle razor quiz collect teach lawn tank",
});

const wallet = lcd.wallet(mk);
const tokenAddress = "terra1f0d9gat6sr5j5dv57w0lvvmcy6cdma7w895tf5";

const cw20Send = new MsgExecuteContract(wallet.key.accAddress, tokenAddress, {
    transfer: {
        amount: "100000",
        recipient: "terra1p3sfq0z4rqqs0rzn45xvjqtekyhzmttxs44rv2"
    },
});

const tx = await wallet.createAndSignTx({ msgs: [cw20Send] });
const result = await lcd.tx.broadcast(tx);

console.log(result);