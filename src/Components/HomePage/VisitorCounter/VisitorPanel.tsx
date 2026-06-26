import './VisitorPanelStyle.css';

function VisitorPanel() {
return (
    <div className="panel panel-visitor-counter" style={{gridArea: 'visitors'}}>
        <div className="panel-header">
            <span>Visitor Counter</span>
        </div>
        <div className="panel-body">
            <p>Visitor Counter</p>
        </div>
  </div>
)
}

export default VisitorPanel