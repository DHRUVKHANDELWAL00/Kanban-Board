import React from 'react';

const Status = ({ todo = [], done = [], cancelled = [], inProgress = [], backlog = [] }) => {
  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <div className="column-header todo">
          <h2>Todo</h2>
        </div>
        <div className="column-content">
          {todo?.length > 0 ? (
            todo.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag todo-tag">{tasks.tag?.[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks to do</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header in-progress">
          <h2>In Progress</h2>
        </div>
        <div className="column-content">
          {inProgress?.length > 0 ? (
            inProgress.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag in-progress-tag">{tasks.tag?.[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks in progress</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header done">
          <h2>Done</h2>
        </div>
        <div className="column-content">
          {done?.length > 0 ? (
            done.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag done-tag">{tasks.tag?.[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No completed tasks</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header cancelled">
          <h2>Cancelled</h2>
        </div>
        <div className="column-content">
          {cancelled?.length > 0 ? (
            cancelled.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag cancelled-tag">{tasks.tag?.[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No cancelled tasks</div>
          )}
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header backlog">
          <h2>Backlog</h2>
        </div>
        <div className="column-content">
          {backlog?.length > 0 ? (
            backlog.map((tasks) => (
              <div className="task-card" key={tasks.id}>
                <div className="task-header">
                  <span className="task-id">{tasks.id}</span>
                  <img className="avatar" width={20} height={20} alt="" />
                </div>
                <h3 className="task-title">{tasks.title}</h3>
                <span className="task-tag backlog-tag">{tasks.tag?.[0]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">No backlog tasks</div>
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
          border-radius: 8px 8px 0 0;
        }

        .column-header h2 {
          margin: 0;
          font-size: 1.1rem;
          color: white;
        }

        .column-header.todo {
          background: #1976d2;
        }

        .column-header.in-progress {
          background: #fb8c00;
        }

        .column-header.done {
          background: #43a047;
        }

        .column-header.cancelled {
          background: #e53935;
        }

        .column-header.backlog {
          background: #757575;
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
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .todo-tag {
          background: #e3f2fd;
          color: #1976d2;
        }

        .in-progress-tag {
          background: #fff3e0;
          color: #fb8c00;
        }

        .done-tag {
          background: #e8f5e9;
          color: #43a047;
        }

        .cancelled-tag {
          background: #ffebee;
          color: #e53935;
        }

        .backlog-tag {
          background: #f5f5f5;
          color: #757575;
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

export default Status;