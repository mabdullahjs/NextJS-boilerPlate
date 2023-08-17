"use client"
type MAButtonProps = {
    label?: string;
    onClick?: () => void;
    className?: string;
    loading?: boolean
};
const MAButton: React.FC<MAButtonProps> = ({
    label,
    onClick,
    className,
    loading
}) => {
    return (
        <div>
            <button onClick={onClick} className={className ? className : 'btn btn-active btn-primary m-3'}>
                {loading === true ? <span className="loading loading-spinner loading-sm"></span> : label}
            </button>
        </div>
    )
}

export default MAButton