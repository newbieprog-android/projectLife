const icons=['calendar-days','receipt','car-front','sprout','key-round','paw-print','file-text','pill','house','wrench','credit-card','bell'];
const positions=[[8,12],[85,10],[2,55],[91,57],[23,4],[72,3],[13,87],[83,87],[1,30],[96,30],[27,95],[70,95]];
document.querySelector('.orbit').innerHTML=icons.map((name,i)=>`<i data-lucide="${name}" style="left:${positions[i][0]}%;top:${positions[i][1]}%;--rotation:${(i%3-1)*13}deg;--delay:${i*.035}s"></i>`).join('');
lucide.createIcons();
const features=[['house','Home'],['car-front','Vehicles'],['credit-card','Subscriptions'],['heart-pulse','Health'],['sprout','Plants'],['paw-print','Pets'],['files','Documents'],['receipt','Receipts'],['bell','Reminders'],['wifi-off','Offline'],['repeat-2','Recurring'],['check-check','Weekly review']];
document.querySelector('#feature-grid').innerHTML=features.map(([icon,label])=>`<div class="feature"><i data-lucide="${icon}" aria-hidden="true"></i><span>${label}</span></div>`).join('');
lucide.createIcons();
if ('IntersectionObserver' in window) {
 document.documentElement.classList.add('js');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
}
