
function integres(m, c, atas, bawah) {
    return (0.5 * m * (atas * atas) + c * atas) - (0.5 * m * (bawah * bawah) + c * bawah)
}

export default {
    intersection_point(data){        
        // var data = {
        //     system_range_grade: {
        //       atfn_x: [4, 4.5, 5],
        //       atfn_y: [0, 1, 0]
        //     },
        //     design_range: {
        //       symbol: "ALAB",
        //       tfn_x: [2.5, 10, 10],
        //       tfn_y: [0, 1, 0]
        //     },
        //     area:{
        //       x : [4, 4.107, 4.84,5],
        //       y : [0, 0.214, 0.32,0]
        //     },
        //     ip : [1,2],
        //     ipy : [0,0],
        //     system_area: 12312312312,
        //     common: 123123123,
        //     ik: 123123123
        //   }
        
        var ax = data.system_range_grade.atfn_x[0];
        var bx = data.system_range_grade.atfn_x[1];
        var cx = data.system_range_grade.atfn_x[2];
        var ay = data.system_range_grade.atfn_y[0];
        var by = data.system_range_grade.atfn_y[1];
        var cy = data.system_range_grade.atfn_y[2];
        var px = data.design_range.tfn_x[0];
        var qx = data.design_range.tfn_x[1];
        var rx = data.design_range.tfn_x[2];
        var py = data.design_range.tfn_y[0];
        var qy = data.design_range.tfn_y[1];
        var ry = data.design_range.tfn_y[2];
        
        var jenis = "";
        var bentuk = "";
        
        //cek benefit
        if (qx == 10 && rx == 10) {
            //console.log("Benefit euy");
            jenis = "benefit";
            if (ax > px && bx > px && cx > px) {
                //console.log("trapesium");
                bentuk = "trapesium";
            } else if (bx == qx && cx == rx && ax <= px) {
                //console.log("SPK");
                bentuk = "SPK";
            } else if (ax == px && bx == qx && ax > px) {
                //console.log("SPL");
                bentuk = "SPL";
            } else if (cx <= px) {
                //console.log("GA ADA PERPOTONGAN");
                bentuk = "NO";
            } else {
                //console.log("SS");
                bentuk = "SS";
            }
        } else {
            //console.log("Cost euy");
            jenis = "cost";
            if (ax == px && bx == qx && cx <= rx) {
                //console.log("SPK");
                bentuk = "SPK";
            } else if (ax == px && bx == qx && cx > rx) {
                //console.log("SPL");
                bentuk = "SPL";
            } else if (ax < rx && bx < rx && cx < rx) {
                //console.log("trapesium");
                bentuk = "trapesium";
            } else if (ax <= rx) {
                bentuk = "SS";
                //console.log("SS");
            } else {
                bentuk = "NO";
                //console.log("GA ADA PERPOTONGAN");
            }
        }
        var m1 = (ay - by) / (ax - bx)
        var m2 = (by - cy) / (bx - cx)
        var m3 = (py - qy) / (px - qx)
        var m4 = (qy - ry) / (qx - rx)
        var c1 = by - (m1 * bx)
        var c2 = cy - (m2 * cx)
        var c3 = qy - (m3 * qx)
        var c4 = ry - (m4 * rx)
        var system_area = (cx - ax) / 2
        //console.log("System Area: " + system_area)
        
        switch (bentuk) {
            case "trapesium":
                {
                    if (jenis === "cost") {
                        
                        var ip1 = (c4 - c1) / (m1 - m4)
                        var ip2 = (c4 - c2) / (m2 - m4)
                        var ipy1 = m1*ip1+c1
                        var ipy2 = m2*ip2+c2
        
                        var y1 = integres(m1, c1, ip1, ax)
                        var y2 = integres(m2, c2, cx, ip2)
                        var y4 = integres(m4, c4, ip2, ip1)
                        var ca = y1 + y2 + y4
                        //console.log(ip1 + ":" + ip2)
                        //console.log("Common area: " + ca)
        
                    } else {
                        var ip1 = (c3 - c1) / (m1 - m3)
                        var ip2 = (c3 - c2) / (m2 - m3)
                        var ipy1 = m1*ip1+c1
                        var ipy2 = m2*ip2+c2
                        
                        //console.log(ip1 + ":" + ip2)
        
                        var y1 = integres(m1, c1, ip1, ax)
                        var y2 = integres(m2, c2, cx, ip2)
                        var y3 = integres(m3, c3, ip2, ip1)
                        var ca = y1 + y2 + y3
                        //console.log(ip1 + ":" + ip2)
                        //console.log("Common area: " + ca)
                    }
                    data.area.x = [ax, ip1,ip2,cx]
                    data.area.y = [ay, ipy1,ipy2,cy]
                    break;
                }
            case "SS":
                {
                    if (jenis === "cost") {
                        var ip1 = (c4 - c1) / (m1 - m4)
                        var ipy1 = m1*ip1+c1
                        data.area.x = [ax, ip1,rx]
                        data.area.y = [ay, ipy1,ry]
        
                        var y1 = integres(m1, c1, ip1, ax)
                        var y4 = integres(m4, c4, rx, ip1)
                        var ca = y1 + y4
                        //console.log(ip1)
                        //console.log("Common area: " + ca)
                    } else {
                        
                        var ip1 = (c3 - c2) / (m2 - m3)
                        //console.log("IPna = "+ip1)
                        var ipy1 = m3*ip1+c3
                        //console.log("IPY = "+ipy1)
                        data.area.x = [px, ip1,cx]
                        data.area.y = [py, ipy1,cy]
                        var y2 = integres(m2, c2, cx, ip1)
                        var y3 = integres(m3, c3, ip1, px)
                        var ca = y2 + y3
                        //console.log(ip1)
                        //console.log("Common area: " + ca)
                    }
                    break;
                }
            case "SPK":
                {
                    //console.log("tidak ada IP")
        
                    if (jenis === "cost") {
                        var y2 = integres(m2, c2, cx, bx)
                        data.area.x = [ax, bx,cx]
                        data.area.y = [ay, by,cy]
                        var ca = y2
                        //console.log("Common area: " + y2)
                        //console.log(m2 +":"+c2 +":"+cx +":"+bx)
                        
                    } else {
                        var y3 = integres(m3, c3, qx, px)
                        var ca = y3
                        //console.log("Common area: " + y3)
                        data.area.x = [px, qx,cx]
                        data.area.y = [py, qy,cy]
        
                    }
                    break;
                }
            case "SPL":
                {
                    //console.log("tidak ada IP")
        
                    if (jenis === "cost") {
                        var ca = integres(m4, c4, rx, qx)
                        //console.log("Common area: " + ca)
                        data.area.x = [ax, bx,rx]
                        data.area.y = [ay, by,ry]
        
                    } else {
                        var ca = integres(m1, c1, bx, ax)
                        //console.log("Common area: " + ca)
                        data.area.x = [ax, qx,cx]
                        data.area.y = [ay, qy,cy]
                    }
                    break;
                }
            default:
                {
                    //console.log("tidak ada IP")
                    data.area.x = [0, 0,0]
                    data.area.y = [0, 0,0]
                }

        }

        data.ca = ca
        data.ip[0] = ip1 || null
        data.ip[1] = ip2 || null

        data.ipy[0] = ipy1 || null
        data.ipy[1] = ipy2 || null
            
        var ik = Math.log2(system_area / ca)
        //console.log("Informesen Konten :" + ik)
        data.ik = ik
        data.common = ca
        data.system_area = system_area

        
        //console.log(data)
        return data
    },
    aggregate_tfn(expertData, index_alter){
        var data = {
            atfn_x : [0,0,0],
            atfn_y : [0,1,0]
        }
        expertData.forEach(element => {
            data.atfn_x[0] += element.decision[index_alter].tfn_x[0] * element.weight
            data.atfn_x[1] += element.decision[index_alter].tfn_x[1] * element.weight
            data.atfn_x[2] += element.decision[index_alter].tfn_x[2] * element.weight
        })
        return data
    }
}