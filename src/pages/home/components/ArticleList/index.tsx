import GTitle from "@/components/GTitle";
import AriticleCard from "@/components/AriticleCard";

const ArticleList = () => {
  return (
    <div
      style={{
        paddingBottom: 40
      }}
    >
      <GTitle title="杂文" />
      <div>
        {[1].map((v, index) => (
          <AriticleCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
