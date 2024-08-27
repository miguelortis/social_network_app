"use client";
import "../../../components/Suggestions/suggestions.css";

import SuggestionCard from "../../../components/Suggestions/SuggestionCard";

const suggestions = [
  {
    coverPhoto:
      "https://thumbs.onlyfans.com/public/files/thumbs/w480/d/dj/dj6/dj6bsv9mw6e87kgpr05xlngecovgqyqv1704480067/253383768/header.jpg",
    profilePicture:
      "https://thumbs.onlyfans.com/public/files/thumbs/c144/i/ii/iio/iiotxiyncsomornnhiq1ygahmds9znu51704411669/253383768/avatar.jpg",
    userName: "lifestyle.lovers",
    nickname: "Dakota & Ty",
  },
  {
    coverPhoto:
      "https://thumbs.onlyfans.com/public/files/thumbs/w480/w/w5/w5h/w5hceruihd3cfn2uohxdqoaupoq3zaoi1705447775/175877260/header.jpg",
    profilePicture:
      "https://thumbs.onlyfans.com/public/files/thumbs/c144/9/9g/9gx/9gxn1uyan9zym3vsui60xwhxtgb2mvwg1631818351/avatar.jpg",
    userName: "billiondollarbabie",
    nickname: "Taruh",
  },
  {
    coverPhoto:
      "https://thumbs.onlyfans.com/public/files/thumbs/w480/e/e7/e7u/e7ub1by8h4rmthsie5xeude8u3k87lxf1675702992/127458895/header.jpg",
    profilePicture:
      "https://thumbs.onlyfans.com/public/files/thumbs/c144/u/uh/uhm/uhmrllhej1a6yo8ufc0iltqm39c5e6qb1675702990/127458895/avatar.jpg",
    userName: "fidtik",
    nickname: "FidTik",
  },
];

export default function Suggestions() {
  return (
    <div className="grid grid-cols-1 gap-y-2 grid-rows-1 bg-white lg:rounded-[12px] p-2">
      <div className="s-title">
        <h2>SUGERENCIAS</h2>
      </div>
      <div>
        {suggestions.map((item, i) => {
          return <SuggestionCard key={i} {...item} />;
        })}
      </div>
    </div>
  );
}
