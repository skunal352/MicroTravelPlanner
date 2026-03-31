export function generateTrip(userLocation, availableHours, budget, categoryFilter, places) {
  let filtered = places.filter(p => 
    (!categoryFilter || p.category===categoryFilter) &&
    p.priceLevel <= budget
  );

  filtered.sort((a,b) => {
    let d1=Math.hypot(a.location.lat-userLocation.lat,a.location.lng-userLocation.lng);
    let d2=Math.hypot(b.location.lat-userLocation.lat,b.location.lng-userLocation.lng);
    return d1-d2;
  });

  let trip=[];
  let time=0;
  for(let p of filtered){
    if(time+1<=availableHours){trip.push(p);time++;}
    else break;
  }
  return trip;
}
