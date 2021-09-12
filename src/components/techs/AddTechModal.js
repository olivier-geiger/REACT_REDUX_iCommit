import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');

  const onSubmit = () => {
    if (firstName === '') {
      M.toast({ html: 'Veuillez entrer un nom!' });
    } else {
      addTech({
        firstName,
      });

      M.toast({ html: `${firstName} a été ajouté en tant que dev!` });

      // Clear Fields
      setFirstName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Nouveau dev</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              placeholder='Entrer le nom du dev...'
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'></label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Valider
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
