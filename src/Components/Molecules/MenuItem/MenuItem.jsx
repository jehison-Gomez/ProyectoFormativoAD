import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MenuItem({ module, isOpen, onToggle, onSubmoduleClick }) {
  const location = useLocation();
  const isActive = location.pathname === module.route;
  const hasSubmodules = !!module.submodules;
  const isParentActive = hasSubmodules && module.submodules.some(
    sub => location.pathname === sub.route
  );

  const handleClick = () => {
    if (hasSubmodules) {
      onToggle();
    }
  };

  return (
    <li key={module.name}>
      <div
        className={`sidebar-module${hasSubmodules ? " has-sub" : ""} ${isActive || isParentActive ? "active" : ""}`}
        onClick={handleClick}
        style={{
          borderBottomLeftRadius: hasSubmodules && isOpen ? 0 : 12,
          borderBottomRightRadius: hasSubmodules && isOpen ? 0 : 12,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          margin: 2
        }}
      >
        <span className="sidebar-icon">{module.icon}</span>
        {hasSubmodules ? (
          <span>{module.name}</span>
        ) : (
          <Link 
            className={`sidebar-link${isActive ? " active" : ""}`} 
            to={module.route}
          >
            {module.name}
          </Link>
        )}
        {hasSubmodules && (
          <span className="sidebar-arrow" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            {isOpen ? "▲" : "▼"}
          </span>
        )}
      </div>
      {hasSubmodules && isOpen && (
        <ul className="sidebar-submodules">
          {module.submodules.map((sub) => (
            <li 
              key={sub.name} 
              className={`sidebar-submodule${location.pathname === sub.route ? " active" : ""}`}
            >
              <Link to={sub.route} onClick={onSubmoduleClick}>{sub.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {!hasSubmodules && !module.route && (
        <span className="sidebar-link">{module.name}</span>
      )}
    </li>
  );
}
