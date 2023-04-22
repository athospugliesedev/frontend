import Link from "next/link";

type ArticleListItemPropsType = {
    title: string;
    description: string;
    date: string;
    slug: string;
    id: number;
}

export default function ArticleListItem({ date, description, id, slug, title }: ArticleListItemPropsType) {
    return (
        <div
            key={id}
            className="[&:not(:last-child)]:pb-2 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-white/5"
            >
            <p className="text-zinc-500 text-xs mb-2">
                {date}
            </p>
            <Link
                href={`/article/${slug}`}
                className="font-bold text-white mb-1 text-lg hover:text-orange-500 transition-color duration-100"
            >
                {title}
            </Link>
            <p className="text-zinc-400 text-base">
                {description}
            </p>
        </div>
    )
}