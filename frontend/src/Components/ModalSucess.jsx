
const FeedbackModal = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif'
    },
    modal: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    },
    title: {
      color: '#333',
      fontSize: '18px',
      marginBottom: '20px',
      fontWeight: '400'
    },
    buttonsContainer: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center'
    },
    buttonYes: {
      padding: '8px 25px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      textTransform: 'lowercase'
    },
    buttonNo: {
      padding: '8px 25px',
      backgroundColor: '#F44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      textTransform: 'lowercase'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Seu pedido chegou com sucesso??</h2>
        <div style={styles.buttonsContainer}>
          <button style={styles.buttonYes} type="button" value='Entrar' onClick={(e) => [e.preventDefault(), window.location.href='/avaliacao ']}>sim</button>
          <button style={styles.buttonNo}>não</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;