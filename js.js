'use strict'
window.onload = function () {
    let r = 'rgb(130,0,0)';
    let y = 'rgb(213,171,0)';
    let g = 'rgb(0,126,0)';
    let o = 'rgb(210,84,0)';
    let w = 'white';
    let b = 'black';

    function setDefaultFontStyle() {
        outer_c.style.backgroundColor = w;
        outer_c.style.color = b;
        outer_a.style.backgroundColor = w;
        outer_a.style.color = b;
        outer_i.style.backgroundColor = w;
        outer_i.style.color = b;
        outer_e.style.backgroundColor = w;
        outer_e.style.color = b;
        outer_p.style.backgroundColor = w;
        outer_p.style.color = b;
        outer_k.style.backgroundColor = w;
        outer_k.style.color = b;
        outer_g.style.backgroundColor = w;
        outer_g.style.color = b;
        outer_d.style.backgroundColor = w;
        outer_d.style.color = b;
        inner_v.style.backgroundColor = w;
        inner_v.style.color = b;
        inner_r.style.backgroundColor = w;
        inner_r.style.color = b;
        inner_s.style.backgroundColor = w;
        inner_s.style.color = b;
        inner_h.style.backgroundColor = w;
        inner_h.style.color = b;
    }

    outer_c.onclick = outer_cw.onclick = function () {
        setDefaultFontStyle();
        outer_c.style.backgroundColor = b;
        outer_c.style.color = w;

        outer_cw.style.backgroundColor = w;
        outer_aw.style.backgroundColor = r;
        outer_iw.style.backgroundColor = y;
        outer_ew.style.backgroundColor = g;
        outer_pw.style.backgroundColor = g;
        outer_kw.style.backgroundColor = g;
        outer_gw.style.backgroundColor = y;
        outer_dw.style.backgroundColor = r;

        inner_vw.style.backgroundColor = o;
        inner_rw.style.backgroundColor = y;
        inner_sw.style.backgroundColor = y;
        inner_hw.style.backgroundColor = o;
    };

    outer_a.onclick = outer_aw.onclick = function () {
        setDefaultFontStyle();
        outer_a.style.backgroundColor = b;
        outer_a.style.color = w;

        outer_cw.style.backgroundColor = r;
        outer_aw.style.backgroundColor = w;
        outer_iw.style.backgroundColor = r;
        outer_ew.style.backgroundColor = y;
        outer_pw.style.backgroundColor = g;
        outer_kw.style.backgroundColor = g;
        outer_gw.style.backgroundColor = g;
        outer_dw.style.backgroundColor = y;

        inner_vw.style.backgroundColor = r;
        inner_rw.style.backgroundColor = o;
        inner_sw.style.backgroundColor = y;
        inner_hw.style.backgroundColor = o;
    };

    outer_i.onclick = outer_iw.onclick = function () {
        setDefaultFontStyle();
        outer_i.style.backgroundColor = b;
        outer_i.style.color = w;

        outer_cw.style.backgroundColor = y;
        outer_aw.style.backgroundColor = r;
        outer_iw.style.backgroundColor = w;
        outer_ew.style.backgroundColor = r;
        outer_pw.style.backgroundColor = y;
        outer_kw.style.backgroundColor = g;
        outer_gw.style.backgroundColor = g;
        outer_dw.style.backgroundColor = g;

        inner_vw.style.backgroundColor = o;
        inner_rw.style.backgroundColor = o;
        inner_sw.style.backgroundColor = y;
        inner_hw.style.backgroundColor = y;
    };

    outer_e.onclick = outer_ew.onclick = function () {
        setDefaultFontStyle();
        outer_e.style.backgroundColor = b;
        outer_e.style.color = w;

        outer_cw.style.backgroundColor = g;
        outer_aw.style.backgroundColor = y;
        outer_iw.style.backgroundColor = r;
        outer_ew.style.backgroundColor = w;
        outer_pw.style.backgroundColor = r;
        outer_kw.style.backgroundColor = y;
        outer_gw.style.backgroundColor = g;
        outer_dw.style.backgroundColor = g;

        inner_vw.style.backgroundColor = o;
        inner_rw.style.backgroundColor = r;
        inner_sw.style.backgroundColor = o;
        inner_hw.style.backgroundColor = y;
    };

    outer_p.onclick = outer_pw.onclick = function () {
        setDefaultFontStyle();
        outer_p.style.backgroundColor = b;
        outer_p.style.color = w;

        outer_cw.style.backgroundColor = g;
        outer_aw.style.backgroundColor = g;
        outer_iw.style.backgroundColor = y;
        outer_ew.style.backgroundColor = r;
        outer_pw.style.backgroundColor = w;
        outer_kw.style.backgroundColor = r;
        outer_gw.style.backgroundColor = y;
        outer_dw.style.backgroundColor = g;

        inner_vw.style.backgroundColor = y;
        inner_rw.style.backgroundColor = o;
        inner_sw.style.backgroundColor = o;
        inner_hw.style.backgroundColor = y;
    };

    outer_k.onclick = outer_kw.onclick = function () {
        setDefaultFontStyle();
        outer_k.style.backgroundColor = b;
        outer_k.style.color = w;

        outer_cw.style.backgroundColor = g;
        outer_aw.style.backgroundColor = g;
        outer_iw.style.backgroundColor = g;
        outer_ew.style.backgroundColor = y;
        outer_pw.style.backgroundColor = r;
        outer_kw.style.backgroundColor = w;
        outer_gw.style.backgroundColor = r;
        outer_dw.style.backgroundColor = y;

        inner_vw.style.backgroundColor = y;
        inner_rw.style.backgroundColor = o;
        inner_sw.style.backgroundColor = r;
        inner_hw.style.backgroundColor = o;
    };

    outer_g.onclick = outer_gw.onclick = function () {
        setDefaultFontStyle();
        outer_g.style.backgroundColor = b;
        outer_g.style.color = w;

        outer_cw.style.backgroundColor = y;
        outer_aw.style.backgroundColor = g;
        outer_iw.style.backgroundColor = g;
        outer_ew.style.backgroundColor = g;
        outer_pw.style.backgroundColor = y;
        outer_kw.style.backgroundColor = r;
        outer_gw.style.backgroundColor = w;
        outer_dw.style.backgroundColor = r;

        inner_vw.style.backgroundColor = y;
        inner_rw.style.backgroundColor = y;
        inner_sw.style.backgroundColor = o;
        inner_hw.style.backgroundColor = o;
    };

    outer_d.onclick = outer_dw.onclick = function () {
        setDefaultFontStyle();
        outer_d.style.backgroundColor = b;
        outer_d.style.color = w;

        outer_cw.style.backgroundColor = r;
        outer_aw.style.backgroundColor = y;
        outer_iw.style.backgroundColor = g;
        outer_ew.style.backgroundColor = g;
        outer_pw.style.backgroundColor = g;
        outer_kw.style.backgroundColor = y;
        outer_gw.style.backgroundColor = r;
        outer_dw.style.backgroundColor = w;

        inner_vw.style.backgroundColor = o;
        inner_rw.style.backgroundColor = y;
        inner_sw.style.backgroundColor = o;
        inner_hw.style.backgroundColor = r;
    };

    inner_v.onclick = inner_vw.onclick = function () {
        setDefaultFontStyle();
        inner_v.style.backgroundColor = b;
        inner_v.style.color = w;

        outer_cw.style.backgroundColor = o;
        outer_aw.style.backgroundColor = r;
        outer_iw.style.backgroundColor = o;
        outer_ew.style.backgroundColor = o;
        outer_pw.style.backgroundColor = y;
        outer_kw.style.backgroundColor = y;
        outer_gw.style.backgroundColor = y;
        outer_dw.style.backgroundColor = o;

        inner_vw.style.backgroundColor = w;
        inner_rw.style.backgroundColor = r;
        inner_sw.style.backgroundColor = y;
        inner_hw.style.backgroundColor = r;
    };

    inner_r.onclick = inner_rw.onclick = function () {
        setDefaultFontStyle();
        inner_r.style.backgroundColor = b;
        inner_r.style.color = w;

        outer_cw.style.backgroundColor = y;
        outer_aw.style.backgroundColor = o;
        outer_iw.style.backgroundColor = o;
        outer_ew.style.backgroundColor = r;
        outer_pw.style.backgroundColor = o;
        outer_kw.style.backgroundColor = o;
        outer_gw.style.backgroundColor = y;
        outer_dw.style.backgroundColor = y;

        inner_vw.style.backgroundColor = r;
        inner_rw.style.backgroundColor = w;
        inner_sw.style.backgroundColor = r;
        inner_hw.style.backgroundColor = y;
    };

    inner_s.onclick = inner_sw.onclick = function () {
        setDefaultFontStyle();
        inner_s.style.backgroundColor = b;
        inner_s.style.color = w;

        outer_cw.style.backgroundColor = y;
        outer_aw.style.backgroundColor = y;
        outer_iw.style.backgroundColor = y;
        outer_ew.style.backgroundColor = o;
        outer_pw.style.backgroundColor = o;
        outer_kw.style.backgroundColor = r;
        outer_gw.style.backgroundColor = o;
        outer_dw.style.backgroundColor = o;

        inner_vw.style.backgroundColor = y;
        inner_rw.style.backgroundColor = r;
        inner_sw.style.backgroundColor = w;
        inner_hw.style.backgroundColor = r;
    };

    inner_h.onclick = inner_hw.onclick = function () {
        setDefaultFontStyle();
        inner_h.style.backgroundColor = b;
        inner_h.style.color = w;

        outer_cw.style.backgroundColor = o;
        outer_aw.style.backgroundColor = o;
        outer_iw.style.backgroundColor = y;
        outer_ew.style.backgroundColor = y;
        outer_pw.style.backgroundColor = y;
        outer_kw.style.backgroundColor = o;
        outer_gw.style.backgroundColor = o;
        outer_dw.style.backgroundColor = r;

        inner_vw.style.backgroundColor = r;
        inner_rw.style.backgroundColor = y;
        inner_sw.style.backgroundColor = r;
        inner_hw.style.backgroundColor = w;
    };
}