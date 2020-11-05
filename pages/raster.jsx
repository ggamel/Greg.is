import * as React from 'react';

import Link from 'next/link';

import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const IndexPage = () => (
  <>
    <Header>
      <Nav />
    </Header>
    <Page title="Home | Greg Gamel">
      <grid columns-s="1" columns="2" columns-l="3">
        <c>
          <h2>8 columns</h2>
          <grid columns="8">
            <c>1</c>
            <c>2</c>
            <c>3</c>
            <c>4</c>
            <c>5</c>
            <c>6</c>
            <c>7</c>
            <c>8</c>
            <c></c>
            <c span="3">3</c>
            <c></c>
            <c span="7-8">7-8</c>
            <c span="2+2">2+2</c>
            <c span="5-8">5-8</c>
            <c span="1-4">1-4</c>
            <c span="6..">6..</c>
            <c span="2..">2..</c>
            <c span="4..">4..</c>
            <c span="4-5">4-5</c>
          </grid>
        </c>
        <c>
          <h2>6 columns</h2>
          <grid columns="6">
            <c>1</c>
            <c>2</c>
            <c>3</c>
            <c>4</c>
            <c>5</c>
            <c>6</c>
            <c></c>
            <c span="2">2</c>
            <c></c>
            <c span="5-6">5-6</c>
            <c span="2+2">2+2</c>
            <c span="5-6">5-6</c>
            <c span="1-4">1-4</c>
            <c span="6..">6..</c>
            <c span="2..">2..</c>
            <c span="4..">4..</c>
            <c span="4-5">4-5</c>
          </grid>
        </c>
        <c>
          <h2>9 columns</h2>
          <grid columns="9">
            <c>1</c>
            <c>2</c>
            <c>3</c>
            <c>4</c>
            <c>5</c>
            <c>6</c>
            <c>7</c>
            <c>8</c>
            <c>9</c>
            <c></c>
            <c span="3">3</c>
            <c></c>
            <c span="7-9">7-9</c>
            <c span="2+2">2+2</c>
            <c span="5-7">5-7</c>
            <c span="1-4">1-4</c>
            <c span="6..">6..</c>
            <c span="2..">2..</c>
            <c span="4..">4..</c>
            <c span="4-5">4-5</c>
          </grid>
        </c>
        <c>
          <h2>3 columns</h2>
          <grid columns="3">
            <c>1</c>
            <c>2</c>
            <c>3</c>
            <c></c>
            <c span="2">2</c>
            <c span="1-2">1-2</c>
            <c span="2+2">2+2</c>
            <c span="1-2">1-2</c>
            <c span="1..">1..</c>
            <c span="2..">2..</c>
          </grid>
        </c>
        <c span="2">
          <h2>16 columns</h2>
          <grid columns="16">
            <c>1</c>
            <c>2</c>
            <c>3</c>
            <c>4</c>
            <c>5</c>
            <c>6</c>
            <c>7</c>
            <c>8</c>
            <c>9</c>
            <c>10</c>
            <c>11</c>
            <c>12</c>
            <c>13</c>
            <c>14</c>
            <c>15</c>
            <c>16</c>
            <c></c>
            <c span="6">6</c>
            <c></c>
            <c span="11-16">11-16</c>
            <c span="2+4">2+4</c>
            <c span="6-14">6-14</c>
            <c span="1-4">1-4</c>
            <c span="6..">6..</c>
            <c span="4..">4..</c>
            <c span="8..">8..</c>
            <c span="4-10">4-5</c>
          </grid>
        </c>
      </grid>
    </Page>

    <Footer></Footer>
  </>
);

export default IndexPage;
