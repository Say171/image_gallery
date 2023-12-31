import React, { useState } from 'react';

export default function App() {

  const images = [
    { src: "public/images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "public/images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "public/images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "public/images/pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
    { src: "public/images/pic5.jpg", alt: "Large moth on a leaf" },
  ];

   // ステートの宣言と初期化
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isDarkened, setIsDarkened] = useState(false);

  // サムネイルがクリックされたときの処理
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setIsDarkened(false); // 画像が暗くなっている状態をリセット
  };

  // "Darken"ボタンがクリックされたときの処理
  const handleDarkenClick = () => {
    setIsDarkened(!isDarkened); // 画像を暗く/明るくする状態を切り替え
  };

  // オーバーレイのスタイル
  // 条件 ? 真の場合の値 : 偽の場合の値
  // transparent: 透明になる
  const overlayStyle = {
    backgroundColor: isDarkened ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
  };

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        {/* 画像の表示 */}
        <img className={`displayed-img ${isDarkened ? 'darkened' : ''}`} src={selectedImage.src} alt={selectedImage.alt} />
        {/* 画像を暗くするオーバーレイ */}
        <div className="overlay" style={overlayStyle}></div>
        {/* ボタン */}
        <button className="dark" onClick={handleDarkenClick}>
          {isDarkened ? 'Lighten' : 'Darken'}
        </button>
      </div>
      <div className="thumb-bar">
        {/* サムネイルバー */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </>
  );
}
