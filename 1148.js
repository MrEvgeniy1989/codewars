const avgArray = a => a[0].map((_,i)=> a.reduce((s,n)=>s + n[i],0)/a.length);
