import Image from 'next/image';

interface ImagesCompProps {
    src: string;
    alt: string;
}

const ImagesComp: React.FC<ImagesCompProps> = ({ src, alt }) => {
    return (
        <div style={{ maxWidth: '800px', margin: 'auto',width: '80%' }}>
            <Image
                alt={alt}
                src={src}
                layout="responsive"
                width={800}
                height={600}
                className="rounded-md"
            />
        </div>
    );
};

export default ImagesComp;