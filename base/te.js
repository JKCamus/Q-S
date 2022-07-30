
function JosephusR(num,nth){
  let value = 0;
  for(let i=1;i<=num;i++){
      //此处为对i取余，上述递归中num也是在逐渐变小的，所以此处为i而非num
      value=(value+nth)%i;
  }
  return value+1;
}
//JosephusR(N,M)即为最终编号
