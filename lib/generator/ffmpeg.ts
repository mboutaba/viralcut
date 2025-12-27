import { execSync } from "child_process";

export function runFFmpeg(cmd: string) {
  
    execSync(cmd);
  
  
}