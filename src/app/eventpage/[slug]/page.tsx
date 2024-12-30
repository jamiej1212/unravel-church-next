// src/app/eventpage/[id].tsx
import EventDetail from '../../components/eventdetails';

// `params`를 props로 받는 방식
export default function EventDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      {/* params.id를 EventDetail 컴포넌트로 전달 */}
      <EventDetail params={params} />
    </div>
  );
}
