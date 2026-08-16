import { InteriorPage } from "../components/InteriorPage";
const experiences=[
 ["The Ridge & Mall Road","Heritage walks, cafés and classic Shimla evenings.","https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80"],
 ["Kufri day out","Forest views, winter snow and a beautiful mountain drive.","https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80"],
 ["Cedar forest walks","Quiet trails, clean air and unhurried picnic stops.","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80"],
 ["Heritage Shimla","Discover colonial architecture and stories of the old town.","https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80"],
 ["Local Himachali flavours","Try siddu, madra and comforting seasonal dishes.","https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"],
 ["Sunset in the hills","Ask our host for the best nearby golden-hour viewpoints.","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"]
];
export default function ExperiencesPage(){return <InteriorPage eyebrow="EXPLORE SHIMLA" title="Days worth stepping out for." intro="Beloved landmarks, forest air and local flavours—picked for guests of Baan Homes." image={experiences[5][2]}><section className="experience-grid section-pad">{experiences.map(([name,text,img],i)=><article key={name}><img src={img} alt={name}/><span>0{i+1}</span><h3>{name}</h3><p>{text}</p></article>)}</section></InteriorPage>}
