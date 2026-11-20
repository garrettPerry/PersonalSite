import './PhotoContent.css';

const photoMap = Object.fromEntries(
    Object.entries(
        import.meta.glob('../../../Assets/Photos/*.{jpg,jpeg,png,webp}', {
            eager: true,
            import: 'default',
        })
    ).map(([path, src]) => [path.split('/').pop()!, src as string])
);

const photoColumns = [
    [
        { src: photoMap['candle.jpg'], alt: 'Candle burning', className: 'photo' },
        { src: photoMap['Alaska1.jpg'], alt: 'Alaskan Mountains' },
        { src: photoMap['mural.jpg'], alt: 'Mural from Notre Dam' },
        { src: photoMap['miotSunset.jpg'], alt: 'Grey Miata in the sunset' },
        { src: photoMap['costaRica.jpg'], alt: 'Costa Rican cove' },
    ],
    [
        { src: photoMap['savannahChurch.jpg'], alt: 'Church in Savannah Georgia' },
        { src: photoMap['tobeFisheye2.jpg'], alt: 'Fisheye closeup of my dachshund' },
        { src: photoMap['tcRainbow.jpg'], alt: '08 Scion tC under a rainbow' },
        { src: photoMap['chanelIsland2.jpg'], alt: 'California Chanel Islands' },
        { src: photoMap['grPrius.jpg'], alt: '2nd gen Toyota GR86 with a prius front bumper' },
    ],
    [
        { src: photoMap['tobeSneak.jpg'], alt: 'dachshund hiding under the bed, ear flipped' },
        { src: photoMap['helen.jpg'], alt: 'river flowing through Helen Georgia' },
        { src: photoMap['lizard.jpg'], alt: 'Leopard gecko sitting in his food bowl' },
        { src: photoMap['canyon.jpg'], alt: 'painted desert' },
        { src: photoMap['bonsai.jpg'], alt: 'My bonsai tree, a jade plant' },
    ],
];

function PhotoContent() {
    return (
        <>
            <div className="photo-content">
                <div className="photo-gallery">
                    {photoColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="column">
                            {column.map((photo, photoIndex) => (
                                <img
                                    key={`${columnIndex}-${photoIndex}`}
                                    src={photo.src}
                                    alt={photo.alt}
                                    className={photo.className}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PhotoContent