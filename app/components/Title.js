export default function Title({ children, font = 'sans', titleHeading }) {
    const Heading = titleHeading;

    return (
        <Heading className={`text-white font-${font}`}>
            {children}
        </Heading>
    )
}