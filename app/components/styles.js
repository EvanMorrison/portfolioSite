const styles = {
  sectionStyle: {
        marginTop: '40px',
        padding: '0 40px 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
  sectionHeading: {
        textAlign: 'center',
        fontSize: '30px',
        margin: '20px 0 15px',
        fontWeight: 100,
      },

  sectionContent: {
        maxWidth: '700px',
        textAlign: 'justify',
        fontWeight: 100,
        fontSize: '18px',
        lineHeight: '28px',
      },
  about: {
    logos: {display:'flex', flexWrap:'wrap', justifyContent:'space-between'}
  },
  projects: {
    content: {display:'flex', flexWrap:'wrap',justifyContent:'space-around'},
    a: {flex:'0 1 40%', minWidth:'400px',marginBottom:'40px'}
  }
}

export default styles;
