function SectionHeader({ title, actionLabel, onAction }) {

    return (
        <div className="section-header">

            <h3>
                {title}
            </h3>

            {actionLabel && (
                <button
                    className="see-more-btn"
                    onClick={onAction}
                >
                    {actionLabel}
                </button>
            )}

        </div>
    );
}

export default SectionHeader;