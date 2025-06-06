export default function TagCloud({ names = [], links = [] }) {
  const name = "tagcloud";

  return (
    <div id={name} style={{textAlign:"justify",}}>
      <div style={{border:"solid 1px black",backgroundColor:"rgba(128, 128, 128, 0.3)", borderRadius:"15px",padding:"5px"}}>
      <div>
        {names.map((tagName, index) => (
          <a
            key={index}
            href={links[index]}
            style={{ marginRight: '0px', textDecoration: 'none', color: 'black' }}
          >
            {tagName}
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}