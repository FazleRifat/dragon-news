import Marquee from "react-fast-marquee";

const Headline = () => {
    return (
        <div className="bg-base-200 p-2 flex ">
            <button className="btn btn-secondary w-20 rounded-sm text-xl font-medium">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default Headline;