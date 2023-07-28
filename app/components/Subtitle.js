export default function Title({ children, font = 'sans', subtitleHeading }) {
    const Heading = subtitleHeading;

    return (
        <Heading className={'font-semibold text-lg text-secondary mb-6'}>
            {children}
        </Heading>
    )
}