const WakuComponent = (memberProps) => {
  // console.log( memberProps );
  return (
    <>
      <div className={ "gg" }>
        <div className={ "aa" }>
          <div className={ "bb" }>
            <img className={ "cc" } src={ memberProps.member.DiscordImageUrl ?? '/assets/images/ume.webp' } alt={ "" }/></div>
          <div className={ "dd" }>{ memberProps.member.nickname ?? "" }</div>
        </div>
        <div className={ "ee" }>
          <p className={ "ff" }>{ memberProps.member.Comment ?? "" }</p>
        </div>
      </div>
    </>
  );
};

export default WakuComponent;