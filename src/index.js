import React from "react";

const ReactAdvancedBanner = props => {
  const { title, image, background, color, parallax, shadow, body, button, buttonColor, buttonBackground, link } = props;
  var bg, isparallax, btnColor;

  if(image === undefined){
    bg = background
  } else {
    bg = 'url('+image+')'
  }

  if(buttonColor === undefined) {
    btnColor = color
  } else {
    btnColor = buttonColor
  }

  if(parallax === 'true'){
    isparallax = 'fixed'
  }

  return (

    <div className="advancedBanner" style={{
      display: 'table',
      width: '100%',
      background: bg || "white",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '320px',
      boxShadow: shadow || '0px 0px 44px 0px rgba(0, 0, 0, 0.11)',
      backgroundAttachment: isparallax || 'initial'
    }}>

      <div className="advancedBanner_content" style={{
        position: 'relative',
        display: 'table-cell',
        verticalAlign: 'middle',
        padding: '2em',
        marginTop: '-1em'
      }}>

        <h1 style={{
          fontSize:'56px',
          color: color || '#444'
        }}>
          {title}
        </h1>

        <p style={{
          color: color || '#444',
          fontSize: '18px',
          lineHeight: '22px',
          paddingTop: '1em',
          paddingBottom: '3em'
        }}>
          {body}
        </p>

        <a href={link || '/'} style={{
          position: 'relative',
          marginBottom: '64px',
          textDecoration: 'none',
          background: buttonBackground || '#fc0',
          padding: '12px 18px 12px 18px',
          fontSize: '18px',
          color: btnColor || '#000',
          borderRadius: '4px'
        }}>
          {button}
        </a>

      </div>
    </div>
  );
};

export default ReactAdvancedBanner;