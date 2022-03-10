import {shallow, render, screen } from '@testing-library/react';
import { table, minifyRecords } from './lib/airtable';

import App from './App';


window.particleInit = jest.fn();

it("test 1", () => { });

describe("#IntersectionObserver", () => {

  test( 'intersectionObserver has called', () => {
    const observe = jest.fn();
    window.IntersectionObserver = jest.fn( () => ( {
      observe
    } ) );

    render( <App/> );
    expect( observe ).toHaveBeenCalled();
  } );
} );

describe("#spyOn", () => {

  test('spy result inspection Math.random return 0.1', () => {
    const spy = jest.spyOn(Math, "random").mockImplementation(() => 0.1);
    expect(Math.random()).toBe(0.1);
    spy.mockRestore();
  });

  it("reset spy Math.random not return 0.1", () => {
    expect(Math.random()).toBeGreaterThan(0.1);
  });

  it("Math.random return under 1", () => {
    expect(Math.random() < 1).toEqual(true);
  });

});

describe("#AirTable", () => {

  test('airtable inerted member size more than 12', async ()=> {
    const records = await table.select( {} ).all();
    const minifiedRecords = await minifyRecords( records );
    expect(records.length).toBeGreaterThan(12)
  })
})

