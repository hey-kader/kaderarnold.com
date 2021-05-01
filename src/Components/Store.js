import React, { Component, useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Tee from './Tee';
import Checkout from './Checkout';

function Store ()  {

    return (
	<Tee />
    )
}

export default Store;
