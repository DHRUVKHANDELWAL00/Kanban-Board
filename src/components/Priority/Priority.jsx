import React from 'react';

const Priority = ({ urgent, high, medium, low, noPriority }) => {
  const styles = {
    statusCards: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'row',
      gap: '32px'
    },
    statusSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333',
      margin: '0'
    },
    cardInd: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e0e0e0',
      transition: 'all 0.2s ease',
    },
    cardInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px'
    },
    cardId: {
      color: '#666',
      fontSize: '14px',
      margin: '0'
    },
    cardImg: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#f0f0f0'
    },
    cardTitle: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#333',
      margin: '0 0 12px 0'
    },
    borderH: {
      backgroundColor: '#f0f0f0',
      padding: '4px 12px',
      borderRadius: '4px',
      fontSize: '13px',
      color: '#666',
      display: 'inline-block',
      margin: '0',
      fontWeight: 'normal'
    },
    noTasks: {
      color: '#666',
      fontSize: '14px',
      padding: '12px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e0e0e0'
    }
  };

  return (
    <div style={styles.statusCards}>
      <div style={styles.statusSection}>
        <h1 style={{...styles.sectionTitle, color: '#dc3545'}}>Urgent</h1>
        {urgent.length > 0 ? 
          urgent.map((tasks) => (
            <div style={styles.cardInd} key={tasks.id}>
              <div style={styles.cardInfo}>
                <p style={styles.cardId}>{tasks.id}</p>
                <img style={styles.cardImg} width={20} height={20} alt=""/>
              </div>    
              <h3 style={styles.cardTitle}>{tasks.title}</h3>
              <h5 style={styles.borderH}>{tasks.tag[0]}</h5>
            </div>
          ))
          :
          <div style={styles.noTasks}>No Such Tasks</div>
        }
      </div>

      <div style={styles.statusSection}>
        <h1 style={{...styles.sectionTitle, color: '#fd7e14'}}>High</h1>
        {high.length > 0 ? 
          high.map((tasks) => (
            <div style={styles.cardInd} key={tasks.id}>
              <div style={styles.cardInfo}>
                <p style={styles.cardId}>{tasks.id}</p>
                <img style={styles.cardImg} width={20} height={20} alt=""/>
              </div>    
              <h3 style={styles.cardTitle}>{tasks.title}</h3>
              <h5 style={styles.borderH}>{tasks.tag[0]}</h5>
            </div>
          ))
          :
          <div style={styles.noTasks}>No Such Tasks</div>
        }
      </div>

      <div style={styles.statusSection}>
        <h1 style={{...styles.sectionTitle, color: '#ffc107'}}>Medium</h1>
        {medium.length > 0 ? 
          medium.map((tasks) => (
            <div style={styles.cardInd} key={tasks.id}>
              <div style={styles.cardInfo}>
                <p style={styles.cardId}>{tasks.id}</p>
                <img style={styles.cardImg} width={20} height={20} alt=""/>
              </div>    
              <h3 style={styles.cardTitle}>{tasks.title}</h3>
              <h5 style={styles.borderH}>{tasks.tag[0]}</h5>
            </div>
          ))
          :
          <div style={styles.noTasks}>No Such Tasks</div>
        }
      </div>

      <div style={styles.statusSection}>
        <h1 style={{...styles.sectionTitle, color: '#0d6efd'}}>Low</h1>
        {low.length > 0 ? 
          low.map((tasks) => (
            <div style={styles.cardInd} key={tasks.id}>
              <div style={styles.cardInfo}>
                <p style={styles.cardId}>{tasks.id}</p>
                <img style={styles.cardImg} width={20} height={20} alt=""/>
              </div>    
              <h3 style={styles.cardTitle}>{tasks.title}</h3>
              <h5 style={styles.borderH}>{tasks.tag[0]}</h5>
            </div>
          ))
          :
          <div style={styles.noTasks}>No Such Tasks</div>
        }
      </div>

      <div style={styles.statusSection}>
        <h1 style={{...styles.sectionTitle, color: '#6c757d'}}>No Priority</h1>
        {noPriority.length > 0 ? 
          noPriority.map((tasks) => (
            <div style={styles.cardInd} key={tasks.id}>
              <div style={styles.cardInfo}>
                <p style={styles.cardId}>{tasks.id}</p>
                <img style={styles.cardImg} width={20} height={20} alt=""/>
              </div>    
              <h3 style={styles.cardTitle}>{tasks.title}</h3>
              <h5 style={styles.borderH}>{tasks.tag[0]}</h5>
            </div>
          ))
          :
          <div style={styles.noTasks}>No Such Tasks</div>
        }
      </div>
    </div>
  );
};

export default Priority;