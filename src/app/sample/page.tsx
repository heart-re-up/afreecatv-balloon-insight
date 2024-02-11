import DonorCardSkeleton from "@/components/donor/DonorCardSkeleton";
import DonorCardLoaded from "@/components/donor/DonorCardLoaded";

export default function Page() {
  return (
    <div className="bg-amber-50 p-4">
      <DonorCardSkeleton index={0} />
      <DonorCardLoaded
        index={0}
        avatarUrl="https://profile.img.afreecatv.com/LOGO/de/devking/devking.jpg?dummy=1707592267782"
        userNickPoongtoday="풍투데이"
        userNickStation="령큐단"
        userId="asdf12342"
        balloon={1002032}
      />
    </div>
  );
}
