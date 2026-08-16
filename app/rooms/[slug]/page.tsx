import { InteriorPage } from "../../components/InteriorPage";
import { roomInventory } from "../data";

export function generateStaticParams(){return roomInventory.map(room=>({slug:room.slug}))}

export default async function RoomDetailPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const room=roomInventory.find(item=>item.slug===slug) ?? roomInventory[0];
  return <InteriorPage eyebrow={`${room.type.toUpperCase()} · BAAN HOMES`} title={room.name} intro={room.description} image={room.image}>
    <section className="detail-gallery section-pad"><img src={room.gallery[0]} alt={`${room.name} main room`}/><img src={room.gallery[1]} alt={`${room.name} living space`}/><img src={room.gallery[2]} alt={`${room.name} detail`}/></section>
    <section className="room-detail-layout section-pad"><div><p className="eyebrow">YOUR ROOM IN SHIMLA</p><h2>Room to slow down.</h2><div className="detail-facts"><span><b>{room.guests}</b> guests</span><span><b>{room.bedrooms}</b> bedroom{room.bedrooms>1?"s":""}</span><span><b>{room.bathrooms}</b> bath{room.bathrooms>1?"s":""}</span><span><b>{room.size}</b> space</span></div><p>{room.description} Every booking includes hotel-style housekeeping, essential toiletries, high-speed Wi-Fi and access to Baan Homes' welcoming shared spaces.</p><h3>What this room offers</h3><div className="detail-amenities">{[...room.features,"Hot water","Daily housekeeping","Free parking","Host assistance"].map(item=><span key={item}>✓ {item}</span>)}</div><a className="back-link" href="/rooms">← Back to all rooms</a></div><aside><p className="eyebrow">BOOK DIRECT</p><div className="detail-rating">★ {room.rating} <span>Exceptional</span></div><div className="detail-rate"><del>₹{room.oldPrice.toLocaleString("en-IN")}</del><b>₹{room.price.toLocaleString("en-IN")}</b><span>/ night + taxes</span></div><label>Check-in<input type="date" defaultValue="2026-08-20"/></label><label>Check-out<input type="date" defaultValue="2026-08-22"/></label><label>Guests<select defaultValue={Math.min(room.guests,2)}>{Array.from({length:room.guests},(_,i)=><option key={i+1}>{i+1}</option>)}</select></label><a className="book-btn" href={`/book?room=${room.slug}`}>Request to book →</a><small>No payment is taken online. Our host confirms availability personally.</small><a href="tel:+917018305160">Call 7018305160</a></aside></section>
  </InteriorPage>
}
