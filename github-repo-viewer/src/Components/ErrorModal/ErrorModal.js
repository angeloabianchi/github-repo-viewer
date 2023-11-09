
import './ErrorModal.css';

const ErrorModal = ({error, showErrorModal, setShowErrorModal}) => {
  return (
    <div className="DisplayOrgsContainer">
                    <div className={`modal ${showErrorModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showErrorModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Error</h5>
                            <button type="button" className="close" onClick={() => setShowErrorModal(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {error}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowErrorModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default ErrorModal;