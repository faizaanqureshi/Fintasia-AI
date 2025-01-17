export default function Rating({ rating }: { rating: number | undefined }) {
    return (
        <div className="flex flex-col">
            <div className="stat place-items-center">
                <div className="stat-title text-slate-600">Fintasia AI Rating</div>
                <div className="stat-value">{rating}</div>
                {rating && rating < 45 ? <div>
                    <div className="stat-desc text-slate-600">↘︎ Low Creditworthiness</div>
                    </div> : null}
                {rating && rating >= 45 && rating < 75 ? <div className="stat-desc text-slate-600">→ Avg Creditworthiness</div> : null}
                {rating && rating >= 75 ? <div className="stat-desc text-slate-600">↗ High Creditworthiness</div> : null}
            </div>
        </div>
    )
}