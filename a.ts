import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js"
import {invokeProgram} from "./chainInteraction"


//const endpoint = clusterApiUrl("devnet");
let connection = new Connection("https://attentive-alien-shape.solana-devnet.quiknode.pro/b58914556e71b433385a7748bd7ede419b8adbef/");
const privatekey = [221,80,175,123,11,72,87,153,215,33,229,60,78,72,185,96,63,64,55,171,111,59,81,208,189,213,214,238,120,162,59,180,91,184,36,169,232,148,78,13,125,177,222,77,200,66,3,72,35,17,116,134,179,152,55,22,100,139,100,189,208,10,134,108];
const keypair  = Keypair.fromSecretKey(Uint8Array.from(privatekey))
invokeProgram(connection, keypair)