export default function Rating({ rating }: { rating: number | undefined }) {
    return (
        <div className="flex flex-col">
            {rating}
        </div>
    )
}