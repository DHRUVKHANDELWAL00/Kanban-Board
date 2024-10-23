import React from 'react';

const Users = ({ usr1, usr2, usr3, usr4, usr5 }) => {
  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <div className="column-header">
          <h2>Anoop sharma</h2>
        </div>
        <div className="column-content">
          {usr1.length > 0 ? (
            usr1.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag">{tasks.tag[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks available</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>Yogesh</h2>
        </div>
        <div className="column-content">
          {usr2.length > 0 ? (
            usr2.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag">{tasks.tag[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks available</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>Shankar kumar</h2>
        </div>
        <div className="column-content">
          {usr3.length > 0 ? (
            usr3.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag">{tasks.tag[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks available</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>Ramesh</h2>
        </div>
        <div className="column-content">
          {usr4.length > 0 ? (
            usr4.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag">{tasks.tag[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks available</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>Suresh</h2>
        </div>
        <div className="column-content">
          {usr5.length > 0 ? (
            usr5.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag">{tasks.tag[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks available</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .kanban-board {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          padding: 1rem;
          min-height: calc(100vh - 2rem);
          background: #f5f5f5;
        }

        .kanban-column {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          min-height: 100%;
        }

        .column-header {
          padding: 1rem;
          border-bottom: 1px solid #e0e0e0;
          background: #fafafa;
          border-radius: 8px 8px 0 0;
        }

        .column-header h2 {
          margin: 0;
          font-size: 1.1rem;
          color: #333;
        }

        .column-content {
          padding: 1rem;
          flex: 1;
          overflow-y: auto;
        }

        .task-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 1rem;
          margin-bottom: 0.8rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease;
        }

        .task-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .task-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .task-id {
          color: #666;
          font-size: 0.9rem;
        }

        .avatar {
          border-radius: 50%;
          background: #e0e0e0;
        }

        .task-title {
          margin: 0.5rem 0;
          font-size: 1rem;
          color: #333;
        }

        .task-tag {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          background: #e3f2fd;
          color: #1976d2;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .empty-state {
          color: #666;
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Users;