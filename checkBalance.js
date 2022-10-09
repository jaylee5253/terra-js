import { LCDClient } from "@terra-money/terra.js";
const lcd = new LCDClient ({
    URL: "https://columbus-lcd.terra.dev/",
    chainID: "columbus-5",
})
async function checkBalance() {
    //const accAddress = "terra15526p9s6f0tz066wywpwrsmssnrl37lqjclhlg";
    const accAddress = "<WALLET_ADDRESS>";
    const jsonString = '{ "balance" : { "address" : "' + accAddress + '" }}';
    const query_msg = JSON.parse(jsonString);
    const tokenAddress = "terra1f0d9gat6sr5j5dv57w0lvvmcy6cdma7w895tf5";
    const result = await lcd.wasm.contractQuery(
        tokenAddress,
        query_msg
    );
    console.log(result);
}
checkBalance();
