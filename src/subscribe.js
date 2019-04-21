let _onToggle;

export const subscribe = (onToggle) => {
    _onToggle = onToggle;
};

export const toggle = () => {
    _onToggle();
}
